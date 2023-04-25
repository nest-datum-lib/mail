import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { ReportStatusService } from './report-status.service';

@Controller()
export class ReportStatusTcpController extends StatusTcpController {
	constructor(
		protected service: ReportStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'reportStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'reportStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('reportStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('reportStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('reportStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('reportStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
