import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';

@Injectable()
export class LetterOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterOptionId';
	protected readonly optionContentColumnName: string = 'letterLetterOptionId';
	protected readonly repositoryConstructor = LetterOption;
	protected readonly repositoryOptionConstructor = LetterLetterOption;
	protected readonly repositoryContentOptionConstructor = LetterLetterLetterOption;

	constructor(
		@InjectRepository(LetterOption) protected readonly repository: Repository<LetterOption>,
		@InjectRepository(LetterLetterOption) public readonly repositoryOption: Repository<LetterLetterOption>,
		@InjectRepository(LetterLetterLetterOption) public readonly repositoryContentOption: Repository<LetterLetterLetterOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
