import { Controller } from '@nestjs/common';
import { OptionHttpController } from '@nest-datum/option';
import { LetterOptionService } from './letter-option.service';

@Controller(`${process.env.SERVICE_MAIL}/letter-option`)
export class LetterOptionHttpController extends OptionHttpController {
	constructor(
		protected service: LetterOptionService,
	) {
		super();
	}
}
