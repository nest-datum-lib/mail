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
	protected entityName = 'report';
	protected entityConstructor = Report;
	protected entityWithTwoStepRemoval = true;

	constructor(
		@InjectRepository(Report) protected entityRepository: Repository<Report>,
		protected connection: Connection,
		protected cacheService: CacheService,
		protected emailService: EmailService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			reportStatusId: true,
			action: true,
			content: true,
			email: true,
			letterId: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}) {
		return ({
			...this.manyGetColumns(customColumns),
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			...super.manyGetQueryColumns(customColumns),
			name: true,
			action: true,
		});
	}

	protected async storeProperties(payload: object): Promise<any> {
		const newId = utilsCheckStrId(payload['newId']) && payload['newId'];
		const email = payload['email'];
		const login = payload['login'];

		delete payload['accessToken'];
		delete payload['refreshToken'];
		delete payload['newId'];
		delete payload['email'];
		delete payload['login'];

		return {
			...payload,
			...payload['userId']
				? { userId: payload['userId'] }
				: {},
			...newId
				? { id: newId }
				: {},
			email,
			content: JSON.stringify({
				login,
				toEmail: email,
				...payload,
			}),
		};
	}

	protected async createProperties(payload: object): Promise<any> {
		return this.storeProperties(payload);
	}

	protected async updateProperties(payload: object): Promise<any> {
		return this.storeProperties(payload);
	}

	protected async createAfter(initialPayload: object, processedPayload: object, data: any): Promise<any> {
		if ((initialPayload || {})['reportStatusId'] === 'mail-report-status-send') {
			this.emailService.send(processedPayload['letterId'], processedPayload['email'], processedPayload['action'], initialPayload);
		}
		return await this.after(initialPayload, processedPayload, data);
	}

	protected async updateAfter(initialPayload: object, processedPayload: object, data: any): Promise<any> {
		if ((initialPayload || {})['reportStatusId'] === 'mail-report-status-send'
			&& initialPayload['letterId']
			&& initialPayload['action']) {
			this.emailService.send(processedPayload['letterId'], processedPayload['email'], processedPayload['action'], initialPayload);
		}
		return await this.after(initialPayload, processedPayload, data);
	}
}
