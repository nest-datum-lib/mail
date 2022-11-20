import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { Template } from '../template/template.entity';
import { TemplateStatus } from './template-status.entity';
import { TemplateStatusService } from './template-status.service';
import { TemplateStatusController } from './template-status.controller';

@Module({
	controllers: [ TemplateStatusController ],
	imports: [
		TypeOrmModule.forFeature([ Template ]),
		TypeOrmModule.forFeature([ TemplateStatus ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		TemplateStatusService, 
	],
})
export class TemplateStatusModule {
}
