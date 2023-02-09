import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { 
	SqlModule,
	SqlService, 
} from '@nest-datum/sql';
import { LetterLetterOptionService } from './letter-letter-option.service';
import { LetterLetterOptionController } from './letter-letter-option.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterOption } from './letter-letter-option.entity';

@Module({
	controllers: [ LetterLetterOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterOption,
			LetterLetterOption,
			Letter,
			LetterLetterLetterOption, 
		]),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
		LetterLetterOptionService, 
	],
})
export class LetterLetterOptionModule {
}

