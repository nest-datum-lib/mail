import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService as NestDatumOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';

@Injectable()
export class LetterOptionService extends NestDatumOptionService {
	public entityName = 'letterOption';
	public entityColumnOption = 'letterOptionId';
	public entityConstructor = LetterOption;

	constructor(
		@InjectRepository(LetterOption) public repository: Repository<LetterOption>,
		@InjectRepository(LetterLetterOption) public repositoryOptionOption: Repository<LetterLetterOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, repositoryOptionOption, connection, cacheService);
	}
}
