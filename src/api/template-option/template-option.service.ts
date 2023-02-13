import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateOption } from './template-option.entity';

@Injectable()
export class TemplateOptionService extends OptionService {
	protected entityName = 'templateOption';
	protected entityServicedName = 'template';
	protected entityId = 'templateId';
	protected entityOptionId = 'templateOptionId';
	protected entityOptionRelationId = 'templateTemplateOptionId';
	protected entityConstructor = TemplateOption;
	protected entityOptionConstructor = TemplateTemplateOption;
	protected entityOptionRelationConstructor = TemplateTemplateTemplateOption;

	constructor(
		@InjectRepository(TemplateOption) protected entityRepository: Repository<TemplateOption>,
		@InjectRepository(TemplateTemplateOption) protected entityOptionRepository: Repository<TemplateTemplateOption>,
		@InjectRepository(TemplateTemplateTemplateOption) protected entityOptionRelationRepository: Repository<TemplateTemplateTemplateOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
