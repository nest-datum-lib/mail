import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { 
	ErrorException,
	WarningException, 
	NotFoundException,
} from '@nest-datum-common/exceptions';
import { SqlService } from '@nest-datum/sql';
import { CacheService } from '@nest-datum/cache';
import {
	encryptPassword,
	generateVerifyKey,
	generateTokens,
	checkPassword,
} from '@nest-datum/jwt';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';

@Injectable()
export class LetterService extends SqlService {
	public entityName = 'letter';
	public entityConstructor = Letter;
	public optionId = 'letterId';
	public optionOptionId = 'letterOetterOptionId';
	public optionRelationConstructor = LetterLetterLetterOption;

	constructor(
		@InjectRepository(Letter) public repository: Repository<Letter>,
		@InjectRepository(LetterLetterLetterOption) public repositoryOptionRelation: Repository<LetterLetterLetterOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		letterStatusId: true,
		name: true,
		description: true,
		textPart: true,
		subject: true,
		templateId: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
		textPart: true,
		subject: true,
	};
}
