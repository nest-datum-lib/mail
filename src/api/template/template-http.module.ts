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
import { TemplateService } from './template.service';
import { TemplateHttpController } from './template-http.controller';
import { TemplateTemplateOptionService } from '../template-template-option/template-template-option.service';
import { TemplateTemplateTemplateOptionService } from '../template-template-template-option/template-template-template-option.service';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';

@Module({
	controllers: [ TemplateHttpController ],
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
		TemplateTemplateTemplateOptionService,
		TemplateService,
	],
})
export class TemplateHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
