import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TemplateStatus } from './template-status.entity';

@Injectable()
export class TemplateStatusService extends StatusService {
	protected entityName = 'templateStatus';
	protected entityConstructor = TemplateStatus;

	constructor(
		@InjectRepository(TemplateStatus) protected entityRepository: Repository<TemplateStatus>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
