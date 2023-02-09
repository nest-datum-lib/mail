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
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';
import { LetterService } from './letter.service';

@Controller()
export class LetterController extends NestDatumTcpOptionController {
	constructor(
		public transportService: TransportService,
		public service: LetterService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new WarningException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['subject'])) {
			throw new WarningException(`Property "subject" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['textPart'])) {
			throw new WarningException(`Property "textPart" is not valid.`);
		}
		console.log('options', options);
		if (!utilsCheckStrId(options['templateId'])) {
			throw new WarningException(`Property "templateId" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterStatusId'])) {
			throw new WarningException(`Property "letterStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['subject'] && utilsCheckStrDescription(options['subject'])) 
				? { subject: options['subject'] } 
				: {},
			...(options['textPart'] && utilsCheckStrDescription(options['textPart'])) 
				? { textPart: options['textPart'] } 
				: {},
			...(options['letterStatusId'] && utilsCheckStrId(options['letterStatusId'])) 
				? { letterStatusId: options['letterStatusId'] } 
				: {},
			...(options['templateId'] && utilsCheckStrId(options['templateId'])) 
				? { templateId: options['templateId'] } 
				: {},
		};
	}

	@MessagePattern({ cmd: 'letter.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'letter.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('letter.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('letter.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('letter.createOptions')
	async createOptions(payload) {
		return await super.createOptions(payload);
	}

	@EventPattern('letter.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('letter.update')
	async update(payload) {
		return await super.update(payload);
	}
}
