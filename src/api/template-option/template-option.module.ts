import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateOption } from './template-option.entity';
import { TemplateOptionService } from './template-option.service';
import { TemplateOptionController } from './template-option.controller';

@Module({
	controllers: [ TemplateOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateOption,
			TemplateTemplateOption, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TemplateOptionService, 
	],
})
export class TemplateOptionModule {
}


