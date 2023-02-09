import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionOptionTcpController as NestDatumOptionOptionTcpController } from '@nest-datum/option';
import { LetterLetterOptionService } from './letter-letter-option.service';

@Controller()
export class LetterLetterOptionController extends NestDatumOptionOptionTcpController {
	public columnOptionId = 'letterId';
	public columnOptionOptionId = 'letterOptionId';

	constructor(
		public transportService: TransportService,
		public service: LetterLetterOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'letterOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'letterOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('letterOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('letterOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('letterOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
