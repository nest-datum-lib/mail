import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { TemplateStatusService } from './template-status.service';
import { TemplateStatusTcpController } from './template-status-tcp.controller';
import { TemplateStatus } from './template-status.entity';

@Module({
	controllers: [ TemplateStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ TemplateStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		TemplateStatusService, 
	],
})
export class TemplateStatusTcpModule {
}

