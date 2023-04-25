import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { BindService } from '@nest-datum/bind';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from './template-template-option.entity';


export class TemplateTemplateOptionService extends BindService {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';
	protected repositoryConstructor = TemplateTemplateOption;
	
	constructor(
		@InjectRepository(TemplateTemplateOption) protected repository: Repository<TemplateTemplateOption>,
		protected connection: Connection,
		protected repositoryCache: CacheService,
	) {
		super();
	}
}
