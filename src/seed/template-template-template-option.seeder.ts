import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { TemplateTemplateTemplateOption } from '../api/template-template-template-option/template-template-template-option.entity';
import {
	TEMPLATE_BASE_RECOVERY_OPTION_VIEW_CONTENT_ID,
	TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_CONTENT_ID,
	TEMPLATE_BASE_RECOVERY_OPTION_VIEW_ID,
	TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_ID,
	TEMPLATE_BASE_RECOVERY_ID,
	TEMPLATE_BASE_REGISTRATION_ID,
	FILE_VIEW_RECOVERY_ID,
	FILE_VIEW_REGISTRATION_ID,
} from './consts';

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
				id: TEMPLATE_BASE_RECOVERY_OPTION_VIEW_CONTENT_ID,
				templateTemplateOptionId: TEMPLATE_BASE_RECOVERY_OPTION_VIEW_ID,
				templateId: TEMPLATE_BASE_RECOVERY_ID,
				content: FILE_VIEW_RECOVERY_ID,
			}, {
				id: TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_CONTENT_ID,
				templateTemplateOptionId: TEMPLATE_BASE_REGISTRATION_OPTION_VIEW_ID,
				templateId: TEMPLATE_BASE_REGISTRATION_ID,
				content: FILE_VIEW_REGISTRATION_ID,
			}], async (data) => {
				try {
					await this.templateTemplateTemplateOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateTemplateTemplateOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateTemplateTemplateOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}