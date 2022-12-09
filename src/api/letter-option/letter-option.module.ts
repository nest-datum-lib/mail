import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';
import { LetterOptionService } from './letter-option.service';
import { LetterOptionController } from './letter-option.controller';

@Module({
	controllers: [ LetterOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterOption,
			LetterLetterOption, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		LetterOptionService, 
	],
})
export class LetterOptionModule {
}


