import { Controller } from '@nestjs/common';
import { BindHttpTcpController } from '@nest-datum/bind';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/template/option`)
export class TemplateTemplateOptionHttpTcpController extends BindHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'templateOptionRelation';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
