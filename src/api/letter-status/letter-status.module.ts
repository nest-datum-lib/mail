import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { Report } from '../report/report.entity';
import { Letter } from '../letter/letter.entity';
import { LetterStatus } from './letter-status.entity';
import { LetterStatusService } from './letter-status.service';
import { LetterStatusController } from './letter-status.controller';

@Module({
	controllers: [ LetterStatusController ],
	imports: [
		TypeOrmModule.forFeature([ Report ]),
		TypeOrmModule.forFeature([ Letter ]),
		TypeOrmModule.forFeature([ LetterStatus ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		LetterStatusService, 
	],
})
export class LetterStatusModule {
}
