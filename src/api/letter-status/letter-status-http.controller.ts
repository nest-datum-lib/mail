import { Controller } from '@nestjs/common';
import { StatusHttpController } from '@nest-datum/status';
import { LetterStatusService } from './letter-status.service';

@Controller(`${process.env.SERVICE_MAIL}/letter-status`)
export class LetterStatusHttpController extends StatusHttpController {
	constructor(
		protected service: LetterStatusService,
	) {
		super();
	}
}
