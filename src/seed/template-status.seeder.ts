import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
import { TemplateStatus } from '../api/template-status/template-status.entity';

export class TemplateStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateStatus) private readonly userRepository: Repository<TemplateStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "happ-mail-template-status-active",
        userId: "happ-sso-user-admin",
        envKey: "HAPP_MAIL_TEMPLATE_STATUS_ACTIVE",
        name: "Active",
        description: "Template is active.",
        isDeleted: false,
        isNotDelete: true,
        createdAt: "04/19/2023 06:33:40+0",
        updatedAt: "04/19/2023 06:33:40+0"
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