import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService as NestDatumOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateOption } from './template-option.entity';

@Injectable()
export class TemplateOptionService extends NestDatumOptionService {
	public entityName = 'templateOption';
	public entityColumnOption = 'templateOptionId';
	public entityConstructor = TemplateOption;

	constructor(
		@InjectRepository(TemplateOption) public repository: Repository<TemplateOption>,
		@InjectRepository(TemplateTemplateOption) public repositoryOptionOption: Repository<TemplateTemplateOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, repositoryOptionOption, connection, cacheService);
	}
}
