import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
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
import { 
	redis,
	sql, 
} from '@nest-datum-common/config';
import { SettingModule } from './api/setting/setting.module';
import { TemplateModule } from './api/template/template.module';
import { TemplateStatusModule } from './api/template-status/template-status.module';
import { TemplateOptionModule } from './api/template-option/template-option.module';
import { TemplateTemplateOptionModule } from './api/template-template-option/template-template-option.module';
import { LetterModule } from './api/letter/letter.module';
import { LetterStatusModule } from './api/letter-status/letter-status.module';
import { LetterOptionModule } from './api/letter-option/letter-option.module';
import { LetterLetterOptionModule } from './api/letter-letter-option/letter-letter-option.module';
import { ReportModule } from './api/report/report.module';
import { ReportStatusModule } from './api/report-status/report-status.module';
import { AppController } from './app.controller';

@Module({
	imports: [
		TypeOrmModule.forRoot(sql),
		RedisModule.forRoot(redis),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
		SettingModule,
		TemplateModule,
		TemplateStatusModule,
		TemplateOptionModule,
		TemplateTemplateOptionModule,
		LetterModule,
		LetterStatusModule,
		LetterOptionModule,
		LetterLetterOptionModule,
		ReportModule,
		ReportStatusModule,
	],
	controllers: [ AppController ],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
	],
})
export class AppModule {
}
