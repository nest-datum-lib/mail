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
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';

@Injectable()
export class TemplateService extends SqlService {
	public entityName = 'template';
	public entityConstructor = Template;
	public optionId = 'templateId';
	public optionOptionId = 'templateTemplateOptionId';
	public optionRelationConstructor = TemplateTemplateTemplateOption;

	constructor(
		@InjectRepository(Template) public repository: Repository<Template>,
		@InjectRepository(TemplateTemplateTemplateOption) public repositoryOptionRelation: Repository<TemplateTemplateTemplateOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		templateStatusId: true,
		name: true,
		description: true,
		fromEmail: true,
		fromName: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
		fromEmail: true,
		fromName: true,
	};
}
