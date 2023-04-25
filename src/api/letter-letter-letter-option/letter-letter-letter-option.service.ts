import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { LetterLetterLetterOption } from './letter-letter-letter-option.entity';

@Injectable()
export class LetterLetterLetterOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterLetterOptionId';
	protected readonly repositoryConstructor = LetterLetterLetterOption;

	constructor(
		@InjectRepository(LetterLetterLetterOption) protected readonly repository: Repository<LetterLetterLetterOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
