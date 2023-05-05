import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { LetterLetterOptionService } from './letter-letter-option.service';

@Controller(`${process.env.SERVICE_MAIL}/letter/option`)
export class LetterLetterOptionHttpController extends BindHttpController {
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterOptionId';

	constructor(
		protected service: LetterLetterOptionService,
	) {
		super();
	}
}
