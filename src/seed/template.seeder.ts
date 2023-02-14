import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { Template } from '../api/template/template.entity';
import {
	USER_DEFAULT_ID,
	TEMPLATE_STATUS_ACTIVE_ID,
	TEMPLATE_BASE_RECOVERY_ID,
	TEMPLATE_BASE_REGISTRATION_ID,
} from './consts';

export class TemplateSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Template) private readonly templateRepository: Repository<Template>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: TEMPLATE_BASE_RECOVERY_ID,
				userId: USER_DEFAULT_ID,
				templateStatusId: TEMPLATE_STATUS_ACTIVE_ID,
				name: 'Base recovery',
				description: 'Base recovery.',
				fromEmail: process.env.USER_EMAIL,
				fromName: process.env.USER_LOGIN,
				isNotDelete: true,
			}, {
				id: TEMPLATE_BASE_REGISTRATION_ID,
				userId: USER_DEFAULT_ID,
				templateStatusId: TEMPLATE_STATUS_ACTIVE_ID,
				name: 'Base recovery',
				description: 'Base recovery.',
				fromEmail: process.env.USER_EMAIL,
				fromName: process.env.USER_LOGIN,
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.templateRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Template 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Template 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}