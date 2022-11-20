import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { Template } from '../template/template.entity';
import { LetterStatus } from '../letter-status/letter-status.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from './letter.entity';
import { LetterService } from './letter.service';
import { LetterController } from './letter.controller';

@Module({
	controllers: [ LetterController ],
	imports: [
		TypeOrmModule.forFeature([ 
			LetterStatus,
			LetterLetterLetterOption,
			LetterLetterOption,
			Letter,
			Template,
		]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		LetterService, 
	],
})
export class LetterModule {
}

