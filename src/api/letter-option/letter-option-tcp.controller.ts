import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { OptionTcpController } from '@nest-datum/option';
import { LetterOptionService } from './letter-option.service';

@Controller()
export class LetterOptionTcpController extends OptionTcpController {
	constructor(
		protected service: LetterOptionService,
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

	@EventPattern('letter.content')
	async content(payload) {
		return await super.content(payload);
	}
}
