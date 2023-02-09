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
import { Template } from '../template/template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report } from './report.entity';

@Module({
	controllers: [ ReportController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateTemplateOption,
			TemplateTemplateTemplateOption,
			Template,
			LetterLetterOption,
			LetterLetterLetterOption,
			Letter,
			Report, 
		]),
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

