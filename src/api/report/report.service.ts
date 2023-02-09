import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { 
	ErrorException,
	WarningException, 
	NotFoundException,
} from '@nest-datum-common/exceptions';
import { SqlService } from '@nest-datum/sql';
import { CacheService } from '@nest-datum/cache';
import {
	encryptPassword,
	generateVerifyKey,
	generateTokens,
	checkPassword,
} from '@nest-datum/jwt';
import { strId as utilsCheckStrId } from '@nest-datum-utils/check';
import { EmailService } from '../email/email.service';
import { Report } from './report.entity';

@Injectable()
export class ReportService extends SqlService {
	public entityName = 'report';
	public entityConstructor = Report;
	
	constructor(
		@InjectRepository(Report) public repository: Repository<Report>,
		public connection: Connection,
		public cacheService: CacheService,
		public emailService: EmailService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		reportStatusId: true,
		action: true,
		content: true,
		email: true,
		letterId: true,
		createdAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		action: true,
	};

	async create(payload: object = {}): Promise<any> {
		const email = payload['email'];
		const login = payload['login'];

		delete payload['accessToken'];
		delete payload['refreshToken'];
		delete payload['email'];
		delete payload['login'];
		
		this.cacheService.clear([ this.entityName, 'many' ]);

		const output = await this.repository.save(await this.createProps({
			...payload,
			...payload['userId']
				? { userId: payload['userId'] }
				: {},
			email,
		}));

		if (payload['reportStatusId'] === 'mail-report-status-send') {
			this.emailService.send(payload['letterId'], email, payload['action'], {
				login,
				...payload,
			});
		}
		return output;
	}

	async update(payload: object = {}): Promise<any> {
		const newId = utilsCheckStrId(payload['newId']) && payload['newId'];
		const email = payload['email'];
		const login = payload['login'];

		delete payload['accessToken'];
		delete payload['refreshToken'];
		delete payload['email'];
		delete payload['login'];

		this.cacheService.clear([ this.entityName, 'many' ]);
		this.cacheService.clear([ this.entityName, 'one' ]);

		console.log('???????', {
			...await this.createProps({ 
				login,
				...payload,
			}),
			...newId
				? { id: newId }
				: {},
			email,
		});

		await this.repository.update({ id: payload['id'] }, {
			...await this.createProps({ 
				login,
				...payload,
			}),
			...newId
				? { id: newId }
				: {},
			email,
		});

		if (payload['reportStatusId'] === 'mail-report-status-send'
			&& payload['letterId']
			&& payload['action']) {
			this.emailService.send(payload['letterId'], email, payload['action'], {
				...await this.createProps({ 
					login,
					...payload,
				}),
				...newId
					? { id: newId }
					: {},
			});
		}

		return true;
	}
}
