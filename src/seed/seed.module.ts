import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';
import { Letter } from '../api/letter/letter.entity';
import { LetterStatus } from '../api/letter-status/letter-status.entity';
import { LetterOption } from 'src/api/letter-option/letter-option.entity';
import { LetterLetterOption } from 'src/api/letter-letter-option/letter-letter-option.entity';
import { LetterLetterLetterOption } from 'src/api/letter-letter-letter-option/letter-letter-letter-option.entity';
import { ReportStatus } from '../api/report-status/report-status.entity';
import { RoleAccess } from 'src/api/role-access/role-access.entity';
import { TemplateTemplateTemplateOption } from '../api/template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../api/template-option/template-option.entity';
import { TemplateStatus } from '../api/template-status/template-status.entity';
import { TemplateTemplateOption } from '../api/template-template-option/template-template-option.entity';
import { Template } from '../api/template/template.entity';
import { Setting } from 'src/api/setting/setting.entity';
import { Access } from 'src/api/access/access.entity';
import { AccessOption } from 'src/api/access-option/access-option.entity';
import { AccessStatus } from 'src/api/access-status/access-status.entity';
import { AccessAccessOption } from 'src/api/access-access-option/access-access-option.entity';
import { AccessAccessAccessOption } from 'src/api/access-access-access-option/access-access-access-option.entity';

import { SeedService } from './seed.service';
import { LetterSeeder } from './letter.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { ReportStatusSeeder } from './report-status.seeder';
import { TemplateSeeder } from './template.seeder';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template_template_template_option.seeder';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			Access,
			AccessOption,
			AccessStatus,
			AccessAccessOption,
			AccessAccessAccessOption,
			Letter,
			LetterStatus,
			LetterOption,
			LetterLetterOption,
			LetterLetterLetterOption,
			ReportStatus,
			RoleAccess,
			Template,
			TemplateOption,
			TemplateStatus,
			TemplateTemplateOption,
			TemplateTemplateTemplateOption,
			Setting
		]),
	],
	providers: [
		SeedService,
		LetterSeeder,
		LetterStatusSeeder,
		ReportStatusSeeder,
		TemplateSeeder,
		TemplateStatusSeeder,
		TemplateOptionSeeder,
		TemplateTemplateOptionSeeder,
		TemplateTemplateTemplateOptionSeeder
	]
})
export class SeedModule {}
