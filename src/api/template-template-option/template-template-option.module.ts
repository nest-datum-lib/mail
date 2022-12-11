import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { TemplateTemplateOptionController } from './template-template-option.controller';
import { TemplateTemplateOptionService } from './template-template-option.service';
import { TemplateTemplateOption } from './template-template-option.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { Template } from '../template/template.entity';

@Module({
	controllers: [ TemplateTemplateOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateTemplateOption,
			TemplateTemplateTemplateOption,
			TemplateOption,
			Template, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TemplateTemplateOptionService, 
	],
})
export class TemplateTemplateOptionModule {
}
