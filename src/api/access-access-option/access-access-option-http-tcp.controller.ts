import { Controller } from '@nestjs/common';
import { AccessAccessOptionHttpTcpController as AccessAccessOptionHttpTcpControllerBase } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/access/option`)
export class AccessAccessOptionHttpTcpController extends AccessAccessOptionHttpTcpControllerBase {
	protected readonly serviceName: string = process.env.SERVICE_MAIL;

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
