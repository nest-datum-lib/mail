import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { ReportStatusService } from './report-status.service';
import { ReportStatusHttpController } from './report-status-http.controller';
import { ReportStatus } from './report-status.entity';

@Module({
	controllers: [ ReportStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ ReportStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		ReportStatusService, 
	],
})
export class ReportStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
