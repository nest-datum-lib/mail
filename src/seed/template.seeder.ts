import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
import { Template } from '../api/template/template.entity';

export class TemplateSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Template) private readonly userRepository: Repository<Template>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "happ-mail-template-base-recovery",
        userId: "happ-sso-user-admin",
        templateStatusId: "happ-mail-template-status-active",
        name: "Base recovery",
        description: "Base recovery.",
        fromEmail: "ihor.bielchenko@gmail.com",
        fromName: "admin",
        isDeleted: false,
        isNotDelete: true,
        createdAt: "04/19/2023 06:01:18+0",
        updatedAt: "04/19/2023 06:01:55+0",
        envKey: "HAPP_MAIL_TEMPLATE_BASE_RECOVERY"
			},
			{
        id: "happ-mail-template-base-registration",
        userId: "happ-sso-user-admin",
        templateStatusId: "happ-mail-template-status-active",
        name: "Base registration",
        description: "Base registration.",
        fromEmail: "ihor.bielchenko@gmail.com",
        fromName: "admin",
        isDeleted: false,
        isNotDelete: true,
        createdAt: "04/19/2023 06:01:18+0",
        updatedAt: "04/19/2023 06:01:55+0",
        envKey: "HAPP_MAIL_TEMPLATE_BASE_REGISTRATION"
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: user 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: user 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}