import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { CacheService } from '@nest-datum/services';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template-template-template-option.seeder';
import { TemplateSeeder } from './template.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { LetterSeeder } from './letter.seeder';
import { SettingSeeder } from './setting.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly cacheService: CacheService,
		private readonly connection: Connection,
		private readonly templateStatus: TemplateStatusSeeder,
		private readonly templateOption: TemplateOptionSeeder,
		private readonly templateTemplateOption: TemplateTemplateOptionSeeder,
		private readonly templateTemplateTemplateOption: TemplateTemplateTemplateOptionSeeder,
		private readonly template: TemplateSeeder,
		private readonly letterStatus: LetterStatusSeeder,
		private readonly letter: LetterSeeder,
		private readonly setting: SettingSeeder,
	) {
		this.seeders = [
			this.templateStatus,
			this.templateOption,
			this.template,
			this.templateTemplateOption,
			this.templateTemplateTemplateOption,
			this.letterStatus,
			this.letter,
			this.setting,
		];
	}

	async send() {
		try {
			await this.cacheService.clear('templateStatus.many');
			await this.cacheService.clear('templateStatus.one');
			await this.cacheService.clear('templateOption.many');
			await this.cacheService.clear('templateOption.one');
			await this.cacheService.clear('template.many');
			await this.cacheService.clear('template.one');
			await this.cacheService.clear('letterStatus.many');
			await this.cacheService.clear('letterStatus.one');
			await this.cacheService.clear('letter.many');
			await this.cacheService.clear('letter.one');
			await this.cacheService.clear('setting.many');
			await this.cacheService.clear('setting.one');

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
