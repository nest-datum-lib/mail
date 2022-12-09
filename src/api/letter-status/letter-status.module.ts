import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Letter } from '../letter/letter.entity';
import { LetterStatus } from './letter-status.entity';
import { LetterStatusService } from './letter-status.service';
import { LetterStatusController } from './letter-status.controller';

@Module({
	controllers: [ LetterStatusController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Letter,
			LetterStatus, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		LetterStatusService, 
	],
})
export class LetterStatusModule {
}
