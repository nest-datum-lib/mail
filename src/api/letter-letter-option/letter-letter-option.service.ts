import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from './letter-letter-option.entity';

@Injectable()
export class LetterLetterOptionService extends OptionOptionService {
	protected entityName = 'letterLetterOption';
	protected entityConstructor = LetterLetterOption;
	protected entityOptionId = 'letterOptionId';
	protected entityId = 'letterId';

	constructor(
		@InjectRepository(LetterLetterOption) protected entityRepository: Repository<LetterLetterOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
