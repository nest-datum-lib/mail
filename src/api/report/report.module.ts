import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { ReportStatus } from '../report-status/report-status.entity';
import { Report } from './report.entity';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';

@Module({
	controllers: [ ReportController ],
	imports: [
		TypeOrmModule.forFeature([ 
			ReportStatus,
			Report, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		ReportService, 
	],
})
export class ReportModule {
}

