import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { ReportStatusService } from './report-status.service';
import { ReportStatusTcpController } from './report-status-tcp.controller';
import { ReportStatus } from './report-status.entity';

@Module({
	controllers: [ ReportStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ ReportStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		ReportStatusService, 
	],
})
export class ReportStatusTcpModule {
}

