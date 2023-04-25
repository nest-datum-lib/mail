import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { LetterLetterOption } from './letter-letter-option.entity';


export class LetterLetterOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterOptionId';
	protected repositoryConstructor = LetterLetterOption;
	
	constructor(
		@InjectRepository(LetterLetterOption) protected repository: Repository<LetterLetterOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
