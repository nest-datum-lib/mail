import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { CacheService } from '@nest-datum/cache';
import { SettingSeeder } from './setting.seeder';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateSeeder } from './template.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template-template-template-option.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { LetterSeeder } from './letter.seeder';
import { ReportStatusSeeder } from './report-status.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly cacheService: CacheService,
		private readonly connection: Connection,
		private readonly settings: SettingSeeder,
		private readonly templateStatus: TemplateStatusSeeder,
		private readonly templateOption: TemplateOptionSeeder,
		private readonly template: TemplateSeeder,
		private readonly templateTemplateOption: TemplateTemplateOptionSeeder,
		private readonly templateTemplateTemplateOption: TemplateTemplateTemplateOptionSeeder,
		private readonly letterStatusStatus: LetterStatusSeeder,
		private readonly letter: LetterSeeder,
		private readonly reportStatus: ReportStatusSeeder,
	) {
		this.seeders = [
			this.settings,
			this.templateOption,
			this.templateOption,
			this.template,
			this.templateTemplateOption,
			this.templateTemplateTemplateOption,
			this.letterStatusStatus,
			this.letter,
			this.reportStatus,
		];
	}

	async send() {
		try {
			await this.cacheService.clear([ 'setting', 'many' ]);
			await this.cacheService.clear([ 'setting', 'one' ]);
			await this.cacheService.clear([ 'templateOption', 'many' ]);
			await this.cacheService.clear([ 'templateOption', 'one' ]);
			await this.cacheService.clear([ 'templateOption', 'many' ]);
			await this.cacheService.clear([ 'templateOption', 'one' ]);
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'one' ]);
			await this.cacheService.clear([ 'templateTemplateOption', 'many' ]);
			await this.cacheService.clear([ 'templateTemplateOption', 'one' ]);
			await this.cacheService.clear([ 'templateTemplateTemplateOption', 'many' ]);
			await this.cacheService.clear([ 'templateTemplateTemplateOption', 'one' ]);
			await this.cacheService.clear([ 'letterStatusStatus', 'many' ]);
			await this.cacheService.clear([ 'letterStatusStatus', 'one' ]);
			await this.cacheService.clear([ 'letter', 'many' ]);
			await this.cacheService.clear([ 'letter', 'one' ]);
			await this.cacheService.clear([ 'reportStatus', 'many' ]);
			await this.cacheService.clear([ 'reportStatus', 'one' ]);

			await Bluebird.each(this.seeders, async (seeder) => {
				this.logger.log(`Seeding ${seeder.constructor.name}`);
				
				await seeder.send();
			});
		}
		catch (err) {
			console.error(`ERROR send: ${err.message}`);
		}
	}
}
