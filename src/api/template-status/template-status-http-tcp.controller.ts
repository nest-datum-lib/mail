import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/template-status`)
export class TemplateStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'templateStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
