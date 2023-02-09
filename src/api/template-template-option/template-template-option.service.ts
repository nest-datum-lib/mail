import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService as NestDatumOptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from './template-template-option.entity';

@Injectable()
export class TemplateTemplateOptionService extends NestDatumOptionOptionService {
	public entityName = 'templateTemplateOption';
	public entityConstructor = TemplateTemplateOption;

	constructor(
		@InjectRepository(TemplateTemplateOption) public repository: Repository<TemplateTemplateOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}

	protected selectDefaultMany = {
		id: true,
		templateId: true,
		templateOptionId: true,
		createdAt: true,
		updatedAt: true,
	};
}
