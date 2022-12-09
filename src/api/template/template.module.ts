import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Letter } from '../letter/letter.entity';
import { TemplateStatus } from '../template-status/template-status.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';

@Module({
	controllers: [ TemplateController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateStatus,
			TemplateTemplateTemplateOption,
			TemplateTemplateOption,
			Template,
			Letter,
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TemplateService, 
	],
})
export class TemplateModule {
}

