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
import { LetterStatusService } from './letter-status.service';
import { LetterStatusController } from './letter-status.controller';
import { LetterStatus } from './letter-status.entity';

@Module({
	controllers: [ LetterStatusController ],
	imports: [
		TypeOrmModule.forFeature([ LetterStatus ]),
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
		LetterStatusService, 
	],
})
export class LetterStatusModule {
}

