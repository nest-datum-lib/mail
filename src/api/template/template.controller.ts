import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { WarningException } from '@nest-datum/exceptions';
import { TransportService } from '@nest-datum/transport';
import { TcpController } from '@nest-datum/controller';
import { 
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strDescription as utilsCheckStrDescription,
	strEmail as utilsCheckStrEmail,
} from '@nest-datum-utils/check';
import { TemplateService } from './template.service';

@Controller()
export class TemplateController extends TcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: TemplateService,
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

	@EventPattern('template.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('template.update')
	async update(payload) {
		return await super.update(payload);
	}
}
