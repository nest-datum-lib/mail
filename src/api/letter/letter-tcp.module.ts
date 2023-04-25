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
import { LetterTcpController } from './letter-tcp.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';

@Module({
	controllers: [ LetterTcpController ],
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
		LetterService,
	],
})
export class LetterTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
