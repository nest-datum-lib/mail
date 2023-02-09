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
import { LetterOptionService } from './letter-option.service';
import { LetterOptionController } from './letter-option.controller';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { Letter } from '../letter/letter.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';

@Module({
	controllers: [ LetterOptionController ],
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
		LetterOptionService, 
	],
})
export class LetterOptionModule {
}

