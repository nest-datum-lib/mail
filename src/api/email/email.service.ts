const ejs = require('ejs');
const mailjet = require('node-mailjet');

import { 
	Inject,
	Injectable, 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { TransportService } from '@nest-datum/transport';
import { CacheService } from '@nest-datum/cache';
import { generateAccessToken } from '@nest-datum/jwt';
import { download as utilsFilesDownload } from '@nest-datum-utils/files';
import { Template } from '../template/template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Report } from '../report/report.entity';

@Injectable()
export class EmailService {
	constructor(
		@InjectRepository(Report) public reportRepository: Repository<Report>,
		@InjectRepository(Letter) public letterRepository: Repository<Letter>,
		@InjectRepository(LetterLetterLetterOption) private readonly letterLetterLetterOptionRepository: Repository<LetterLetterLetterOption>,
		@InjectRepository(LetterLetterOption) private readonly letterLetterOptionRepository: Repository<LetterLetterOption>,
		@InjectRepository(Template) private readonly templateRepository: Repository<Template>,
		@InjectRepository(TemplateTemplateTemplateOption) private readonly templateTemplateTemplateOptionRepository: Repository<TemplateTemplateTemplateOption>,
		@InjectRepository(TemplateTemplateOption) private readonly templateTemplateOptionRepository: Repository<TemplateTemplateOption>,
		public connection: Connection,
		public transportService: TransportService,
		public cacheService: CacheService,
	) {
	}

	async getLetterData(letterId: string) {
		const letter = await this.letterRepository.findOne({
			where: {
				id: letterId,
			},
		});

		if (!letter) {
			throw new Error(`Letter with id "${letterId}" is undefined.`);
		}

		const letterOptionContent = await this.letterLetterLetterOptionRepository.find({
			where: {
				letterId,
			},
			relations: {
				letterLetterOption: {
					letterOption: true,
				},
			},
		});

		if (!letterOptionContent) {
			throw new Error(`Letter options with letterId "${letterId}" is undefined.`);
		}

		const template = await this.templateRepository.findOne({
			where: {
				id: letter['templateId'],
			},
		});

		if (!template) {
			throw new Error(`Letter template with id "${letter['templateId']}" is undefined.`);
		}

		const templateOptionContent = await this.templateTemplateTemplateOptionRepository.find({
			where: {
				templateId: letter['templateId'],
			},
			relations: {
				templateTemplateOption: {
					templateOption: true,
				},
			},
		});

		if (!templateOptionContent) {
			throw new Error(`Oemplate with templateId "${letter['templateId']}" is undefined.`);
		}
		return {
			letter,
			letterOptionContent,
			template,
			templateOptionContent,
		};
	}

	async getViewId(templateOptionContent = []) {
		let i = 0,
			viewTarget = '';

		while (i < templateOptionContent.length) {
			if (templateOptionContent[i].templateTemplateOption['templateOptionId'] === 'mail-template-option-view') {
				viewTarget = templateOptionContent[i]['content'];
				break;
			}
			i++;
		}
		return viewTarget;
	}

	async send(letterId: string, email: string, action: string, body): Promise<any> {
		const letterData = await this.getLetterData(letterId);
		const viewId = await this.getViewId(letterData['templateOptionContent']);
		
		const accessToken = generateAccessToken({
			id: process.env.USER_ID,
			roleId: process.env.USER_ADMIN_ROLE,
			email: process.env.USER_EMAIL,
		}, Date.now());
		const viewFile = await this.transportService.send({
			name: process.env.SERVICE_FILES, 
			cmd: 'file.one',
		}, {
			id: viewId,
			accessToken,
		});
		const mailjetConnection = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
		const mailjetRequest = mailjetConnection
			.post('send', {
				'version': 'v3.1'
			})
			.request({
				'Messages': [{
					'From': {
						'Email': process.env.MAILJET_EMAIL,
						'Name': process.env.MAILJET_NAME,
					},
					'To': [{
						'Email': email,
						'Name': body['login'] || process.env.USER_LOGIN,
					}],
					'Subject': letterData['letter']['subject'],
					'TextPart': letterData['letter']['textPart'],
					'HTMLPart': await ejs.renderFile(await utilsFilesDownload(viewFile, accessToken), {
						props: body,
						data: letterData,
						process: process,
					}),
							'CustomID': 'AppGettingStartedTest',
				}],
			});

		await this.reportRepository.save({
			userId: body['userId'] || process.env.USER_ID,
			reportStatusId: 'mail-report-status-sent',
			action,
			content: JSON.stringify(body),
		});
		return {
			props: body,
			data: letterData,
		};
	}
}
