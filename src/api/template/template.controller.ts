import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { WarningException } from '@nest-datum-common/exceptions';
import { TransportService } from '@nest-datum/transport';
import { TcpOptionController as NestDatumTcpOptionController } from '@nest-datum-common/controller';
import { 
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strEmail as utilsCheckStrEmail,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';
import { TemplateService } from './template.service';

@Controller()
export class TemplateController extends NestDatumTcpOptionController {
	constructor(
		public transportService: TransportService,
		public service: TemplateService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new WarningException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['fromEmail'])) {
			throw new WarningException(`Property "fromEmail" is not valid.`);
		}
		if (!utilsCheckStrName(options['fromName'])) {
			throw new WarningException(`Property "fromName" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateStatusId'])) {
			throw new WarningException(`Property "templateStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['fromEmail'] && utilsCheckStrEmail(options['fromEmail'])) 
				? { fromEmail: options['fromEmail'] } 
				: {},
			...(options['fromName'] && utilsCheckStrName(options['fromName'])) 
				? { fromName: options['fromName'] } 
				: {},
			...(options['templateStatusId'] && utilsCheckStrId(options['templateStatusId'])) 
				? { templateStatusId: options['templateStatusId'] } 
				: {},
		};
	}

	@MessagePattern({ cmd: 'template.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'template.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('template.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('template.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('template.createOptions')
	async createOptions(payload) {
		return await super.createOptions(payload);
	}

	@EventPattern('template.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('template.update')
	async update(payload) {
		return await super.update(payload);
	}
}
