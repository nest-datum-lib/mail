import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateStatus } from 'src/api/template-status/template-status.entity';

export class TemplateStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateStatus) private readonly templateStatusRepository: Repository<TemplateStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'template-status-active',
				name: 'Active',
				description: 'Template is active.',
			}], async (data) => {
				try {
					await this.templateStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: template-status 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: template-status 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}