import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { TemplateTemplateOptionService } from './template-template-option.service';

@Controller(`${process.env.SERVICE_MAIL}/template/option`)
export class TemplateTemplateOptionHttpController extends BindHttpController {
	constructor(
		protected service: TemplateTemplateOptionService,
	) {
		super();
	}
}
