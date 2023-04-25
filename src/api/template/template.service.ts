import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { MainService } from '@nest-datum/main';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';

@Injectable()
export class TemplateService extends MainService {
	protected readonly withEnvKey: boolean = true;
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly repositoryConstructor = Template;
	protected readonly repositoryBindOptionConstructor = TemplateTemplateOption;
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';

	constructor(
		@InjectRepository(Template) protected readonly repository: Repository<Template>,
		@InjectRepository(TemplateTemplateOption) protected repositoryBindOption: Repository<TemplateTemplateOption>,
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
			templateStatusId: true,
			name: true,
			description: true,
			fromEmail: true,
			fromName: true,
		});
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return ({
			...super.oneGetColumns(customColumns),
			userId: true,
			envKey: true,
			templateStatusId: true,
			name: true,
			description: true,
			fromEmail: true,
			fromName: true,
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
