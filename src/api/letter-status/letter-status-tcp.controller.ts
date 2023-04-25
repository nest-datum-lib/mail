import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { StatusTcpController } from '@nest-datum/status';
import { LetterStatusService } from './letter-status.service';

@Controller()
export class LetterStatusTcpController extends StatusTcpController {
	constructor(
		protected service: LetterStatusService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'letterStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'letterStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('letterStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('letterStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('letterStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('letterStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
