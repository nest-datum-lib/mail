import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService as NestDatumOptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from './letter-letter-option.entity';

@Injectable()
export class LetterLetterOptionService extends NestDatumOptionOptionService {
	public entityName = 'letterLetterOption';
	public entityConstructor = LetterLetterOption;

	constructor(
		@InjectRepository(LetterLetterOption) public repository: Repository<LetterLetterOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}

	protected selectDefaultMany = {
		id: true,
		letterId: true,
		letterOptionId: true,
		createdAt: true,
		updatedAt: true,
	};
}
