import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService,
} from '@nest-datum/services';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateOption } from './template-option.entity';
import { TemplateOptionService } from './template-option.service';
import { TemplateOptionController } from './template-option.controller';

@Module({
	controllers: [ TemplateOptionController ],
	imports: [
		TypeOrmModule.forFeature([ TemplateOption ]),
		TypeOrmModule.forFeature([ TemplateTemplateOption ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		TemplateOptionService, 
	],
})
export class TemplateOptionModule {
}


