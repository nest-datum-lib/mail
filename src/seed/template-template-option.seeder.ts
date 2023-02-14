import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { TemplateTemplateOption } from '../api/template-template-option/template-template-option.entity';
import {
	TEMPLATE_OPTION_VIEW_ID,
	TEMPLATE_BASE_RECOVERY_ID,
	TEMPLATE_BASE_REGISTRATION_ID,
	TEMPLATE_BASE_RECOVERY_OPTION_VIEW_ID,
	TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_ID,
} from './consts';

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
				id: TEMPLATE_BASE_RECOVERY_OPTION_VIEW_ID,
				templateOptionId: TEMPLATE_OPTION_VIEW_ID,
				templateId: TEMPLATE_BASE_RECOVERY_ID,
			}, {
				id: TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_ID,
				templateOptionId: TEMPLATE_OPTION_VIEW_ID,
				templateId: TEMPLATE_BASE_REGISTRATION_ID,
			}], async (data) => {
				try {
					await this.templateTemplateOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateTemplateOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateTemplateOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}