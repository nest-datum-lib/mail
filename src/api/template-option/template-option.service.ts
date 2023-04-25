import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from './template-option.entity';

@Injectable()
export class TemplateOptionService extends OptionService {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';
	protected readonly optionContentColumnName: string = 'templateTemplateOptionId';
	protected readonly repositoryConstructor = TemplateOption;
	protected readonly repositoryOptionConstructor = TemplateTemplateOption;
	protected readonly repositoryContentOptionConstructor = TemplateTemplateTemplateOption;

	constructor(
		@InjectRepository(TemplateOption) protected readonly repository: Repository<TemplateOption>,
		@InjectRepository(TemplateTemplateOption) public readonly repositoryOption: Repository<TemplateTemplateOption>,
		@InjectRepository(TemplateTemplateTemplateOption) public readonly repositoryContentOption: Repository<TemplateTemplateTemplateOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
