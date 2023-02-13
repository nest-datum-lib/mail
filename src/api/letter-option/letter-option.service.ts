import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';

@Injectable()
export class LetterOptionService extends OptionService {
	protected entityName = 'letterOption';
	protected entityServicedName = 'letter';
	protected entityId = 'letterId';
	protected entityOptionId = 'letterOptionId';
	protected entityOptionRelationId = 'letterLetterOptionId';
	protected entityConstructor = LetterOption;
	protected entityOptionConstructor = LetterLetterOption;
	protected entityOptionRelationConstructor = LetterLetterLetterOption;

	constructor(
		@InjectRepository(LetterOption) protected entityRepository: Repository<LetterOption>,
		@InjectRepository(LetterLetterOption) protected entityOptionRepository: Repository<LetterLetterOption>,
		@InjectRepository(LetterLetterLetterOption) protected entityOptionRelationRepository: Repository<LetterLetterLetterOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
