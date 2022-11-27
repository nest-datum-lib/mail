import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateTemplateOption } from 'src/api/template-template-option/template-template-option.entity';

export class TemplateTemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateTemplateOption) private readonly templateTemplateOptionRepository: Repository<TemplateTemplateOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'mail-template-template-option-register',
				templateId: 'mail-emplate-register',
				templateOptionId: 'mail-template-option-view',
			}, {
				id: 'mail-template-template-option-recovery',
				templateId: 'mail-template-recovery',
				templateOptionId: 'mail-template-option-view',
			}], async (data) => {
				try {
					await this.templateTemplateOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: template-template-option 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: template-template-option 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}