import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { ManyService } from '@nest-datum/many';
import { TemplateTemplateTemplateOption } from './template-template-template-option.entity';

@Injectable()
export class TemplateTemplateTemplateOptionService extends ManyService {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateTemplateOptionId';
	protected readonly repositoryConstructor = TemplateTemplateTemplateOption;

	constructor(
		@InjectRepository(TemplateTemplateTemplateOption) protected readonly repository: Repository<TemplateTemplateTemplateOption>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
