import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Report } from '../report/report.entity';
import { ReportStatus } from './report-status.entity';
import { ReportStatusService } from './report-status.service';
import { ReportStatusController } from './report-status.controller';

@Module({
	controllers: [ ReportStatusController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Report,
			ReportStatus, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		ReportStatusService, 
	],
})
export class ReportStatusModule {
}
