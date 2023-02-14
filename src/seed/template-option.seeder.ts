import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { TemplateOption } from '../api/template-option/template-option.entity';
import {
	USER_DEFAULT_ID,
	DATA_TYPE_FILE_SELECT_ID,
	TEMPLATE_OPTION_VIEW_ID,
} from './consts';

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
				id: TEMPLATE_OPTION_VIEW_ID,
				userId: USER_DEFAULT_ID,
				name: 'View id',
				description: 'View id.',
				dataTypeId: DATA_TYPE_FILE_SELECT_ID,
				isRequired: true,
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.templateOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}