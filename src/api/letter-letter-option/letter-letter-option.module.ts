import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { LetterLetterOptionController } from './letter-letter-option.controller';
import { LetterLetterOptionService } from './letter-letter-option.service';
import { LetterLetterOption } from './letter-letter-option.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Module({
	controllers: [ LetterLetterOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterLetterOption,
			LetterLetterLetterOption,
			LetterOption,
			Letter, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		LetterLetterOptionService, 
	],
})
export class LetterLetterOptionModule {
}
