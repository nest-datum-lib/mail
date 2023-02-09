import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService as NestDatumStatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TemplateStatus } from './template-status.entity';

@Injectable()
export class TemplateStatusService extends NestDatumStatusService {
	public entityConstructor = TemplateStatus;

	constructor(
		@InjectRepository(TemplateStatus) public repository: Repository<TemplateStatus>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
