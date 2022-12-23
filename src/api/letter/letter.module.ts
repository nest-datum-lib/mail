import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Template } from '../template/template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { LetterStatus } from '../letter-status/letter-status.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Report } from '../report/report.entity';
import { Letter } from './letter.entity';
import { LetterService } from './letter.service';
import { LetterController } from './letter.controller';

@Module({
	controllers: [ LetterController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterStatus,
			LetterLetterLetterOption,
			LetterLetterOption,
			Letter,
			Template,
			TemplateTemplateTemplateOption,
			TemplateTemplateOption,
			Report,
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		LetterService, 
	],
})
export class LetterModule {
}

