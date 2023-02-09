import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionTcpController as NestDatumOptionTcpController } from '@nest-datum/option';
import { TemplateOptionService } from './template-option.service';

@Controller()
export class TemplateOptionController extends NestDatumOptionTcpController {
	constructor(
		public transportService: TransportService,
		public service: TemplateOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'templateOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'templateOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('templateOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('templateOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('templateOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('templateOption.update')
	async update(payload) {
		return await super.update(payload);
	}
}
