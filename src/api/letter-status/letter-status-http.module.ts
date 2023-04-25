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
import { LetterStatusService } from './letter-status.service';
import { LetterStatusHttpController } from './letter-status-http.controller';
import { LetterStatus } from './letter-status.entity';

@Module({
	controllers: [ LetterStatusHttpController ],
	imports: [
		TypeOrmModule.forFeature([ LetterStatus ]),
		CacheModule,
	],
	providers: [
		CacheService,
		LetterStatusService, 
	],
})
export class LetterStatusHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
