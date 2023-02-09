import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService as NestDatumStatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { ReportStatus } from './report-status.entity';

@Injectable()
export class ReportStatusService extends NestDatumStatusService {
	public entityConstructor = ReportStatus;

	constructor(
		@InjectRepository(ReportStatus) public repository: Repository<ReportStatus>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
