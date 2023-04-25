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
import { TemplateOptionService } from './template-option.service';
import { TemplateOptionHttpController } from './template-option-http.controller';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from '../template/template.entity';
import { TemplateOption } from './template-option.entity';

@Module({
	controllers: [ TemplateOptionHttpController ],
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
		TemplateOptionService,
	],
})
export class TemplateOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
