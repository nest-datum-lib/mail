import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { TemplateTemplateOptionService } from './template-template-option.service';

@Controller(`${process.env.SERVICE_MAIL}/template/option`)
export class TemplateTemplateOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';

	constructor(
		protected service: TemplateTemplateOptionService,
	) {
		super();
	}
}
