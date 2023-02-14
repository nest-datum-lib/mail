import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	redis,
	sql, 
} from '@nest-datum-common/config';
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
import { SeedService } from './seed.service';

import { Setting } from '../api/setting/setting.entity';
import { TemplateStatus } from '../api/template-status/template-status.entity';
import { TemplateOption } from '../api/template-option/template-option.entity';
import { Template } from '../api/template/template.entity';
import { TemplateTemplateOption } from '../api/template-template-option/template-template-option.entity';
import { TemplateTemplateTemplateOption } from '../api/template-template-template-option/template-template-template-option.entity';
import { LetterStatus } from '../api/letter-status/letter-status.entity';
import { LetterOption } from '../api/letter-option/letter-option.entity';
import { Letter } from '../api/letter/letter.entity';
import { LetterLetterOption } from '../api/letter-letter-option/letter-letter-option.entity';
import { LetterLetterLetterOption } from '../api/letter-letter-letter-option/letter-letter-letter-option.entity';
import { Report } from '../api/report/report.entity';
import { ReportStatus } from '../api/report-status/report-status.entity';
import { SettingSeeder } from './setting.seeder';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateSeeder } from './template.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template-template-template-option.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { LetterSeeder } from './letter.seeder';
import { ReportStatusSeeder } from './report-status.seeder';

@Module({
	controllers: [],
	imports: [
		RedisModule.forRoot(redis),
		TypeOrmModule.forRoot(sql),
		TypeOrmModule.forFeature([
			Setting,
			TemplateStatus,
			TemplateOption,
			Template,
			TemplateTemplateTemplateOption,
			LetterStatus,
			LetterOption,
			Letter,
			LetterLetterOption,
			LetterLetterLetterOption,
			ReportStatus,
			Report,
		]),
		ReplicaModule,
		TransportModule,
		CacheModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SeedService,
		SettingSeeder,
		TemplateStatusSeeder,
		TemplateOptionSeeder,
		TemplateSeeder,
		TemplateTemplateOptionSeeder,
		TemplateTemplateTemplateOptionSeeder,
		LetterStatusSeeder,
		LetterSeeder,
		ReportStatusSeeder,
	]
})

export class SeedModule {
}
