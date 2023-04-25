import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_MAIL}/letter-status`)
export class LetterStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'letterStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
