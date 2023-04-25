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
import { TemplateStatusService } from './template-status.service';
import { TemplateStatusHttpController } from './template-status-http.controller';
import { TemplateStatus } from './template-status.entity';

@Module({
	controllers: [ TemplateStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ TemplateStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TemplateStatusService, 
	],
})
export class TemplateStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
