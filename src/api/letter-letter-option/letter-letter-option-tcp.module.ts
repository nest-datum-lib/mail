import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { LetterLetterOptionService } from './letter-letter-option.service';
import { LetterLetterOptionTcpController } from './letter-letter-option-tcp.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterOption } from './letter-letter-option.entity';

@Module({
	controllers: [
		LetterLetterOptionTcpController, 
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
		LetterLetterOptionService,
	],
})
export class LetterLetterOptionTcpModule {
}
