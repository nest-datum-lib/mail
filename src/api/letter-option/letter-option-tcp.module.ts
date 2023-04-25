import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { LetterOptionService } from './letter-option.service';
import { LetterOptionTcpController } from './letter-option-tcp.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterOption } from './letter-option.entity';

@Module({
	controllers: [
		LetterOptionTcpController, 
	],
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
		LetterOptionService,
	],
})
export class LetterOptionTcpModule {
}
