import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { LetterStatus } from '../letter-status/letter-status.entity';
import { Report } from './report.entity';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';

@Module({
	controllers: [ ReportController ],
	imports: [
		TypeOrmModule.forFeature([ LetterStatus ]),
		TypeOrmModule.forFeature([ Report ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		ReportService, 
	],
})
export class ReportModule {
}

