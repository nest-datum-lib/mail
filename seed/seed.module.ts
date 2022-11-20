import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheService } from '@nest-datum/services';
import { typeormConfig } from 'config/typeorm';
import { redisConfig } from 'config/redis';
import { SeedService } from './seed.service';
import { TemplateStatus } from 'src/api/template-status/template-status.entity';
import { TemplateOption } from 'src/api/template-option/template-option.entity';
import { TemplateTemplateOption } from 'src/api/template-template-option/template-template-option.entity';
import { TemplateTemplateTemplateOption } from 'src/api/template-template-template-option/template-template-template-option.entity';
import { Template } from 'src/api/template/template.entity';
import { LetterStatus } from 'src/api/letter-status/letter-status.entity';
import { LetterOption } from 'src/api/letter-option/letter-option.entity';
import { LetterLetterOption } from 'src/api/letter-letter-option/letter-letter-option.entity';
import { LetterLetterLetterOption } from 'src/api/letter-letter-letter-option/letter-letter-letter-option.entity';
import { Letter } from 'src/api/letter/letter.entity';
import { Report } from 'src/api/report/report.entity';
import { Setting } from 'src/api/setting/setting.entity';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template-template-template-option.seeder';
import { TemplateSeeder } from './template.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { LetterSeeder } from './letter.seeder';
import { SettingSeeder } from './setting.seeder';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		RedisModule.forRoot(redisConfig),
		TypeOrmModule.forFeature([
			TemplateStatus,
			TemplateOption,
			TemplateTemplateOption,
			TemplateTemplateTemplateOption,
			Template,
			LetterStatus,
			LetterOption,
			LetterLetterOption,
			LetterLetterLetterOption,
			Letter,
			Report,
			Setting,
		]),
	],
	providers: [
		CacheService,
		SeedService,
		TemplateStatusSeeder,
		TemplateOptionSeeder,
		TemplateTemplateOptionSeeder,
		TemplateTemplateTemplateOptionSeeder,
		TemplateSeeder,
		LetterStatusSeeder,
		LetterSeeder,
		SettingSeeder,
	]
})

export class SeedModule {
}
