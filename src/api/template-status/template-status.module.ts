import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Template } from '../template/template.entity';
import { TemplateStatus } from './template-status.entity';
import { TemplateStatusService } from './template-status.service';
import { TemplateStatusController } from './template-status.controller';

@Module({
	controllers: [ TemplateStatusController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Template,
			TemplateStatus, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TemplateStatusService, 
	],
})
export class TemplateStatusModule {
}
