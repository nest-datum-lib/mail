import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateOption } from 'src/api/template-option/template-option.entity';

export class TemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateOption) private readonly templateOptionRepository: Repository<TemplateOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'mail-template-option-view',
				name: 'View',
				description: 'View file.',
				dataTypeId: 'file',
				isRequired: true,
				userId: 'sso-user-admin',		
			}], async (data) => {
				try {
					await this.templateOptionRepository.insert(data);
				}
				catch (err) {
					console.error(`ERROR: template-option 2: ${err.message}`);

					await queryRunner.rollbackTransaction();
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			console.error(`ERROR: template-option 1: ${err.message}`);

			await queryRunner.rollbackTransaction();
		}
		finally {
			await queryRunner.release();
		}
	}
}