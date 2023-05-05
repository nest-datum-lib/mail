import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { BindTcpController } from '@nest-datum/bind';
import { TemplateTemplateOptionService } from './template-template-option.service';

@Controller()
export class TemplateTemplateOptionTcpController extends BindTcpController {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';

	constructor(
		protected service: TemplateTemplateOptionService,
	) {
		super();
	}

	@MessagePattern({ cmd: 'templateOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'templateOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('templateOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('templateOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('templateOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
