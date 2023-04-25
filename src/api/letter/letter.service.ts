import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';

@Injectable()
export class LetterService extends MainService {
	protected readonly withEnvKey: boolean = true;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Letter;
	protected readonly repositoryBindOptionConstructor = LetterLetterOption;
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterOptionId';

	constructor(
		@InjectRepository(Letter) protected readonly repository: Repository<Letter>,
		@InjectRepository(LetterLetterOption) protected repositoryBindOption: Repository<LetterLetterOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			envKey: true,
			templateId: true,
			letterStatusId: true,
			name: true,
			description: true,
			textPart: true,
			subject: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			envKey: true,
			templateId: true,
			letterStatusId: true,
			name: true,
			description: true,
			textPart: true,
			subject: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			envKey: true,
			name: true,
			description: true,
			fromEmail: true,
			fromName: true,
		});
	}
}
