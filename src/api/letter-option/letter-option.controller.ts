import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionTcpController as NestDatumOptionTcpController } from '@nest-datum/option';
import { LetterOptionService } from './letter-option.service';

@Controller()
export class LetterOptionController extends NestDatumOptionTcpController {
	constructor(
		public transportService: TransportService,
		public service: LetterOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'letterOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'letterOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('letterOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('letterOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('letterOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('letterOption.update')
	async update(payload) {
		return await super.update(payload);
	}
}
