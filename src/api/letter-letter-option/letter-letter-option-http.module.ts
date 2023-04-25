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
import { LetterLetterOptionService } from './letter-letter-option.service';
import { LetterLetterOptionHttpController } from './letter-letter-option-http.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterOption } from './letter-letter-option.entity';

@Module({
	controllers: [ LetterLetterOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterOption,
			LetterLetterOption,
			Letter,
			LetterLetterLetterOption, 
		]),
		CacheModule,
	],
	providers: [
		CacheService,
		LetterLetterOptionService, 
	],
})
export class LetterLetterOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
