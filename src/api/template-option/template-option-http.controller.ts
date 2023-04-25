import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { TemplateOptionService } from './template-option.service';

@Controller(`${process.env.SERVICE_MAIL}/template-option`)
export class TemplateOptionHttpController extends OptionHttpController {
	constructor(
		protected service: TemplateOptionService,
	) {
		super();
	}
}
