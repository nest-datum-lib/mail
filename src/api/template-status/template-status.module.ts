import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { 
	SqlModule,
	SqlService, 
} from '@nest-datum/sql';
import { TemplateStatusService } from './template-status.service';
import { TemplateStatusController } from './template-status.controller';
import { TemplateStatus } from './template-status.entity';

@Module({
	controllers: [ TemplateStatusController ],
	imports: [
		TypeOrmModule.forFeature([ TemplateStatus ]),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
		TemplateStatusService, 
	],
})
export class TemplateStatusModule {
}

