import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { ReportStatus } from './report-status.entity';

@Injectable()
export class ReportStatusService extends StatusService {
	protected readonly entityName: string = 'reportStatus';
	protected readonly repositoryConstructor = ReportStatus;

	constructor(
		@InjectRepository(ReportStatus) protected readonly repository: Repository<ReportStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
