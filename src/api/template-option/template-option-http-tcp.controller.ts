import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionHttpTcpController } from '@nest-datum/option';

@Controller(`${process.env.SERVICE_MAIL}/template-option`)
export class TemplateOptionHttpTcpController extends OptionHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'templateOption';
	
	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
