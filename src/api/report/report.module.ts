import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { 
	SqlModule,
	SqlService, 
} from '@nest-datum/sql';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report } from './report.entity';

@Module({
	controllers: [ ReportController ],
	imports: [
		TypeOrmModule.forFeature([ Report ]),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
		EmailModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
		EmailService,
		ReportService, 
	],
})
export class ReportModule {
}

