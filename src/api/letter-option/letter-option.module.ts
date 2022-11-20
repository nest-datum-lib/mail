import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService,
} from '@nest-datum/services';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { LetterOption } from './letter-option.entity';
import { LetterOptionService } from './letter-option.service';
import { LetterOptionController } from './letter-option.controller';

@Module({
	controllers: [ LetterOptionController ],
	imports: [
		TypeOrmModule.forFeature([ LetterOption ]),
		TypeOrmModule.forFeature([ LetterLetterOption ]),
		TypeOrmModule.forFeature([ LetterLetterLetterOption ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		LetterOptionService, 
	],
})
export class LetterOptionModule {
}


