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
import { TemplateOptionService } from './template-option.service';
import { TemplateOptionController } from './template-option.controller';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { Template } from '../template/template.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { TemplateOption } from './template-option.entity';

@Module({
	controllers: [ TemplateOptionController ],
	imports: [
		TypeOrmModule.forFeature([
			TemplateOption,
			TemplateTemplateOption,
			Template,
			TemplateTemplateTemplateOption,
		]),
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
		TemplateOptionService, 
	],
})
export class TemplateOptionModule {
}

