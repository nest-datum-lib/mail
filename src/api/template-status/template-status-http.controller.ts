import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { TemplateStatusService } from './template-status.service';

@Controller(`${process.env.SERVICE_MAIL}/template-status`)
export class TemplateStatusHttpController extends StatusHttpController {
	constructor(
		protected service: TemplateStatusService,
	) {
		super();
	}
}
