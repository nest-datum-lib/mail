import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateTemplateTemplateOption } from 'src/api/template-template-template-option/template-template-template-option.entity';

export class TemplateTemplateTemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateTemplateTemplateOption) private readonly templateTemplateTemplateOptionRepository: Repository<TemplateTemplateTemplateOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				templateId: 'mail-template-register',
				templateTemplateOptionId: 'mail-t-t-option-register',
				content: '/views',
			}, {
				templateId: 'mail-template-recovery',
				templateTemplateOptionId: 'mail-t-t-option-recovery',
				content: '/views',
			}], async (data) => {
				try {
					await this.templateTemplateTemplateOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: template-template-template-option 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: template-template-template-option 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}