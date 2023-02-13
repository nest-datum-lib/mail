import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from './template-template-option.entity';

@Injectable()
export class TemplateTemplateOptionService extends OptionOptionService {
	protected entityName = 'templateTemplateOption';
	protected entityConstructor = TemplateTemplateOption;
	protected entityOptionId = 'templateOptionId';
	protected entityId = 'templateId';

	constructor(
		@InjectRepository(TemplateTemplateOption) protected entityRepository: Repository<TemplateTemplateOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
