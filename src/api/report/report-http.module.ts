import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { ReportService } from './report.service';
import { ReportHttpController } from './report-http.controller';
import { Template } from '../template/template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Report } from './report.entity';

@Module({
	controllers: [ ReportHttpController ],
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
		TransportModule,
		CacheModule,
	],
	providers: [
		TransportService,
		CacheService,
		ReportService, 
	],
})
export class ReportHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
