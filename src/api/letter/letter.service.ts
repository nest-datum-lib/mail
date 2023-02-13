import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { OptionEntityService } from '@nest-datum/option';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';

@Injectable()
export class LetterService extends OptionEntityService {
	protected entityName = 'letter';
	protected entityConstructor = Letter;
	protected entityOptionConstructor = LetterLetterOption;
	protected entityId = 'letterId';

	constructor(
		@InjectRepository(Letter) protected entityRepository: Repository<Letter>,
		@InjectRepository(LetterLetterOption) protected entityOptionRepository: Repository<LetterLetterOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			letterStatusId: true,
			name: true,
			description: true,
			textPart: true,
			subject: true,
			templateId: true,
			isDeleted: true,
			isNotDelete: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			...super.manyGetQueryColumns(customColumns),
			name: true,
			description: true,
			textPart: true,
			subject: true,
		});
	}
}
