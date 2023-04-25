import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { LetterStatusService } from './letter-status.service';
import { LetterStatusTcpController } from './letter-status-tcp.controller';
import { LetterStatus } from './letter-status.entity';

@Module({
	controllers: [ LetterStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ LetterStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		LetterStatusService, 
	],
})
export class LetterStatusTcpModule {
}

