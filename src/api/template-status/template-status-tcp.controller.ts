import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { TemplateStatusService } from './template-status.service';

@Controller()
export class TemplateStatusTcpController extends StatusTcpController {
	constructor(
		protected service: TemplateStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'templateStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'templateStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('templateStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('templateStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('templateStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('templateStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
