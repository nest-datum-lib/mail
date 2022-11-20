import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'config/typeorm';
import { redisConfig } from 'config/redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateStatusModule } from './api/template-status/template-status.module';
import { TemplateOptionModule } from './api/template-option/template-option.module';
import { TemplateTemplateOptionModule } from './api/template-template-option/template-template-option.module';
import { TemplateTemplateTemplateOptionModule } from './api/template-template-template-option/template-template-template-option.module';
import { TemplateModule } from './api/template/template.module';
import { LetterStatusModule } from './api/letter-status/letter-status.module';
import { LetterOptionModule } from './api/letter-option/letter-option.module';
import { LetterLetterOptionModule } from './api/letter-letter-option/letter-letter-option.module';
import { LetterLetterLetterOptionModule } from './api/letter-letter-letter-option/letter-letter-letter-option.module';
import { LetterModule } from './api/letter/letter.module';
import { ReportModule } from './api/report/report.module';
import { SettingModule } from './api/setting/setting.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		RedisModule.forRoot(redisConfig),
		SettingModule,
		ReportModule,
		TemplateStatusModule,
		TemplateOptionModule,
		TemplateTemplateOptionModule,
		TemplateTemplateTemplateOptionModule,
		TemplateModule,
		LetterStatusModule,
		LetterOptionModule,
		LetterLetterOptionModule,
		LetterLetterLetterOptionModule,
		LetterModule,
	],
	controllers: [ AppController ],
	providers: [ AppService ],
})
export class AppModule {
}
