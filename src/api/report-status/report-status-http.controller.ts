import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { ReportStatusService } from './report-status.service';

@Controller(`${process.env.SERVICE_MAIL}/report-status`)
export class ReportStatusHttpController extends StatusHttpController {
	constructor(
		protected service: ReportStatusService,
	) {
		super();
	}
}
