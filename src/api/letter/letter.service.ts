import { v4 as uuidv4 } from 'uuid';
import Redis from 'ioredis';
import getCurrentLine from 'get-current-line';
import { 
	Inject,
	Injectable, 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SqlService } from 'nest-datum/sql/src';
import { CacheService } from 'nest-datum/cache/src';
import { 
	ErrorException,
	NotFoundException, 
} from 'nest-datum/exceptions/src';
import { Letter } from './letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Template } from '../template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';

@Injectable()
export class LetterService extends SqlService {
	constructor(
		@InjectRepository(Template) private readonly templateRepository: Repository<Template>,
		@InjectRepository(TemplateTemplateTemplateOption) private readonly templateTemplateTemplateOptionRepository: Repository<TemplateTemplateTemplateOption>,
		@InjectRepository(TemplateTemplateOption) private readonly templateTemplateOptionRepository: Repository<TemplateTemplateOption>,
		@InjectRepository(Letter) private readonly letterRepository: Repository<Letter>,
		@InjectRepository(LetterLetterLetterOption) private readonly letterLetterLetterOptionRepository: Repository<LetterLetterLetterOption>,
		@InjectRepository(LetterLetterOption) private readonly letterLetterOptionRepository: Repository<LetterLetterOption>,
		private readonly connection: Connection,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		templateId: true,
		letterStatusId: true,
		name: true,
		description: true,
		subject: true,
		textPart: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
		subject: true,
		textPart: true,
	};

	async many({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'letter', 'many', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterRepository.findAndCount(await this.findMany(payload));

			await this.cacheService.set([ 'letter', 'many', payload ], output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}

		return [ [], 0 ];
	}

	async one({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'letter', 'one', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterRepository.findOne(await this.findOne(payload));
		
			if (output) {
				await this.cacheService.set([ 'letter', 'one', payload ], output);
			}
			if (!output) {
				return new NotFoundException('Entity is undefined', getCurrentLine(), { user, ...payload });
			}
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
	}

	async drop({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'many' ]);
			this.cacheService.clear([ 'letter', 'one', payload ]);

			await this.dropByIsDeleted(this.letterRepository, payload['id'], async (entity) => {
				await this.letterLetterLetterOptionRepository.delete({ letterId: entity['id'] });
				await this.letterLetterOptionRepository.delete({ letterId: entity['id'] });
			});

			await queryRunner.commitTransaction();

			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async dropMany({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'many' ]);
			this.cacheService.clear([ 'letter', 'one', payload ]);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.dropByIsDeleted(this.letterRepository, payload['ids'][i], async (entity) => {
					await this.letterLetterLetterOptionRepository.delete({ letterId: entity['id'] });
					await this.letterLetterOptionRepository.delete({ letterId: entity['id'] });
				});
				i++;
			}
			await queryRunner.commitTransaction();

			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async create({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'many' ]);

			const output = await this.letterRepository.save({
				...payload,
				userId: payload['userId'] || user['id'] || '',
			});

			await queryRunner.commitTransaction();

			return output;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async createOptions({ user, id, data }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner();

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'option', 'many' ]);
			this.cacheService.clear([ 'letter', 'many' ]);
			this.cacheService.clear([ 'letter', 'one' ]);

			await this.letterLetterLetterOptionRepository.delete({
				letterId: id,
			});

			let i = 0,
				ii = 0;

			while (i < data.length) {
				ii = 0;

				const option = data[i];

				while (ii < option.length) {
					const {
						entityOptionId,
						entityId,
						id: itemId,
						...optionData
					} = option[ii];

					const output = await this.letterLetterLetterOptionRepository.save({
						...optionData,
						letterId: id,
						letterLetterOptionId: entityOptionId,
					});

					ii++;
				}
				i++;
			}
			await queryRunner.commitTransaction();
			
			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, data });
		}
		finally {
			await queryRunner.release();
		}
	}

	async update({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'many' ]);
			this.cacheService.clear([ 'letter', 'one' ]);
			
			await this.updateWithId(this.letterRepository, payload);
			
			await queryRunner.commitTransaction();
			
			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async send({ user, ...payload }): Promise<any> {
		// const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'send' ]);

			const letter = await this.letterRepository.findOne({
				where: {
					id: payload['letterId'],
				},
			});
			const letterOptionContent = await this.letterLetterLetterOptionRepository.find({
				where: {
					letterId: payload['letterId'],
				},
				relations: {
					letterLetterOption: {
						letterOption: true,
					},
				},
			});
			const template = await this.templateRepository.findOne({
				where: {
					id: letter['templateId'],
				},
			});

			console.log('letter', letter);
			console.log('letterOptionContent', letterOptionContent);
			console.log('template', template);

			/*const mailjetConnection = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
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
							'Email': payload['email'],
							'Name': payload['login'],
						}],
						'Subject': `Confirmation account on Revenue Media`,
						'TextPart': `Confirmation account on Revenue Media`,
						'HTMLPart': `<div>
							<h3>Completion of registration</h3>
							<p>To activate your account follow the link: <a href="${process.env.FRONT_URL}/recovery/verify?key=${verifyKey}">${process.env.FRONT_URL}/recovery/verify?key=${verifyKey}</a></p>
						</div>`,
						'CustomID': 'AppGettingStartedTest',
					}],
			});

			const output = await this.letterRepository.save({
				...payload,
				userId: payload['userId'] || user['id'] || '',
			});

			await queryRunner.commitTransaction();*/

			return output;
		}
		catch (err) {
			// await queryRunner.rollbackTransaction();
			// await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			// await queryRunner.release();
		}
	}
}
