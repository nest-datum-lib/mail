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
import { TemplateTcpController } from './template-tcp.controller';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from './template.entity';

@Module({
	controllers: [ TemplateTcpController ],
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
		TemplateService,
	],
})
export class TemplateTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
