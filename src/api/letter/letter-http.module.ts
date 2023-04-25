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
import { LetterService } from './letter.service';
import { LetterHttpController } from './letter-http.controller';
import { LetterLetterOptionService } from '../letter-letter-option/letter-letter-option.service';
import { LetterLetterLetterOptionService } from '../letter-letter-letter-option/letter-letter-letter-option.service';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';

@Module({
	controllers: [ LetterHttpController ],
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
		LetterLetterLetterOptionService,
		LetterService,
	],
})
export class LetterHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
