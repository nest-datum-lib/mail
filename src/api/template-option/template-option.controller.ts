import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionTcpController } from '@nest-datum/option';
import { TemplateOptionService } from './template-option.service';

@Controller()
export class TemplateOptionController extends OptionTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: TemplateOptionService,
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

	@EventPattern('template.content')
	async content(payload) {
		return await super.content(payload);
	}
}
