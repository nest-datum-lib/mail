import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { WarningException } from '@nest-datum-common/exceptions';
import { TransportService } from '@nest-datum/transport';
import { TcpController as NestDatumTcpController } from '@nest-datum-common/controller';
import { 
	str as utilsCheckStr,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';
import { ReportService } from './report.service';

@Controller()
export class ReportController extends NestDatumTcpController {
	constructor(
		public transportService: TransportService,
		public service: ReportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrDescription(options['action'])) {
			throw new WarningException(`Property "action" is not valid.`);
		}
		if (!utilsCheckStr(options['content'])) {
			throw new WarningException(`Property "content" is not valid.`);
		}
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new WarningException(`Property "reportStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['action'] && utilsCheckStrDescription(options['action'])) 
				? { action: options['action'] } 
				: {},
			...(options['content'] && utilsCheckStr(options['content'])) 
				? { content: options['content'] } 
				: {},
			...(options['reportStatusId'] && utilsCheckStrId(options['reportStatusId'])) 
				? { reportStatusId: options['reportStatusId'] } 
				: {},
		};
	}

	@MessagePattern({ cmd: 'report.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'report.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('report.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('report.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('report.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('report.update')
	async update(payload) {
		return await super.update(payload);
	}
}
