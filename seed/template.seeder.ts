import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Template } from 'src/api/template/template.entity';
import { TemplateStatus } from 'src/api/template-status/template-status.entity';

export class TemplateSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Template) private readonly templateRepository: Repository<Template>,
		@InjectRepository(TemplateStatus) private readonly templateStatusRepository: Repository<TemplateStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'template-register',
				userId: 'user-admin',
				templateStatusId: 'template-status-active',
				name: 'Register',
				description: 'Template of the letter with a link to confirm registration.',
				isNotDelete: true,
				fromEmail: 'ihor.bielchenko@gmail.com',
				fromName: 'nest-studio',
			}, {
				id: 'template-recovery',
				userId: 'user-admin',
				templateStatusId: 'template-status-active',
				name: 'Recovery',
				description: 'Template of the letter to confirm the restoration of access to the account.',
				isNotDelete: true,
				fromEmail: 'ihor.bielchenko@gmail.com',
				fromName: 'nest-studio',
			}], async (data) => {
				try {
					await this.templateRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: template 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: template 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}