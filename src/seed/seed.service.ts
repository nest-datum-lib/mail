import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { LetterSeeder } from './letter.seeder';
import { LetterStatusSeeder } from './letter-status.seeder';
import { ReportStatusSeeder } from './report-status.seeder';
import { TemplateSeeder } from './template.seeder';
import { TemplateStatusSeeder } from './template-status.seeder';
import { TemplateOptionSeeder } from './template-option.seeder';
import { TemplateTemplateOptionSeeder } from './template-template-option.seeder';
import { TemplateTemplateTemplateOptionSeeder } from './template-template-template-option.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly connection: Connection,
		private readonly letter: LetterSeeder,
		private readonly letterStatus: LetterStatusSeeder,
		private readonly reportStatus: ReportStatusSeeder,
		private readonly templateSeeder: TemplateSeeder,
		private readonly templateStatusSeeder: TemplateStatusSeeder,
		private readonly templateOptionSeeder: TemplateOptionSeeder,
		private readonly templateTemplateOptionSeeder: TemplateTemplateOptionSeeder,
		private readonly templateTemplateTemplateOptionSeeder: TemplateTemplateTemplateOptionSeeder
	) {
		this.seeders = [
			this.templateSeeder,
			this.templateStatusSeeder,
			this.templateOptionSeeder,
			this.templateTemplateOptionSeeder,
			this.templateTemplateTemplateOptionSeeder,
			this.letter,
			this.letterStatus,
			this.reportStatus,
		];
	}

	async send() {
		try {
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
