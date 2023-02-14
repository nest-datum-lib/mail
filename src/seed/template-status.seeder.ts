import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { TemplateStatus } from '../api/template-status/template-status.entity';
import {
	USER_DEFAULT_ID,
	TEMPLATE_STATUS_ACTIVE_ID,
} from './consts';

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
				id: TEMPLATE_STATUS_ACTIVE_ID,
				userId: USER_DEFAULT_ID,
				name: 'Active',
				description: 'Role is active.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.templateStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}