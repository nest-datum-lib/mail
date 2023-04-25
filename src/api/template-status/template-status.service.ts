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
	protected readonly entityName: string = 'templateStatus';
	protected readonly repositoryConstructor = TemplateStatus;

	constructor(
		@InjectRepository(TemplateStatus) protected readonly repository: Repository<TemplateStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
