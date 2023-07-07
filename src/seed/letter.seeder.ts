import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
import { Letter } from '../api/letter/letter.entity';

export class LetterSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Letter) private readonly userRepository: Repository<Letter>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: "happ-mail-letter-base-recovery",
				userId: "happ-sso-user-admin",
				letterStatusId: "happ-mail-letter-status-active",
				templateId: "happ-mail-template-base-recovery",
				name: "Base recovery",
				description: "Base recovery.",
				subject: "Hello",
				textPart: "Password recovery",
				isDeleted: false,
				isNotDelete: true,
				createdAt: "04/19/2023 06:37:14+0",
				updatedAt: "04/19/2023 06:37:14+0",
				envKey: "HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_RECOVERY"
			},
			{
				id: "happ-mail-letter-base-registration",
				userId: "happ-sso-user-admin",
				letterStatusId: "happ-mail-letter-status-active",
				templateId: "happ-mail-template-base-registration",
				name: "Base registration",
				description: "Base recovery.",
				subject: "Hello",
				textPart: "Successful registration",
				isDeleted: false,
				isNotDelete: true,
				createdAt: "04/19/2023 06:37:14+0",
				updatedAt: "04/19/2023 06:37:14+0",
				envKey: "HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_REGISTRATION"
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