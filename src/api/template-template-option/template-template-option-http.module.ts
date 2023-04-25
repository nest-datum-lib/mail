import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { TemplateTemplateOptionService } from './template-template-option.service';
import { TemplateTemplateOptionHttpController } from './template-template-option-http.controller';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { Template } from '../template/template.entity';
import { TemplateTemplateOption } from './template-template-option.entity';

@Module({
	controllers: [ TemplateTemplateOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateOption,
			TemplateTemplateOption,
			Template,
			TemplateTemplateTemplateOption, 
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		TemplateTemplateOptionService, 
	],
})
export class TemplateTemplateOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}