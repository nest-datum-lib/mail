import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { OptionEntityService } from '@nest-datum/option';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';

@Injectable()
export class TemplateService extends OptionEntityService {
	protected entityName = 'template';
	protected entityConstructor = Template;
	protected entityOptionConstructor = TemplateTemplateOption;
	protected entityId = 'templateId';

	constructor(
		@InjectRepository(Template) protected entityRepository: Repository<Template>,
		@InjectRepository(TemplateTemplateOption) protected entityOptionRepository: Repository<TemplateTemplateOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			templateStatusId: true,
			name: true,
			description: true,
			fromEmail: true,
			fromName: true,
			isDeleted: true,
			isNotDelete: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			...super.manyGetQueryColumns(customColumns),
			name: true,
			description: true,
			fromEmail: true,
			fromName: true,
		});
	}
}
