import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { LetterStatus } from '../api/letter-status/letter-status.entity';

export class LetterStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(LetterStatus) private readonly userRepository: Repository<LetterStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: `happ-mail-letter-status-active`,
        userId: `happ-sso-user-admin`,
        envKey: `HAPP_SSO_USER_ADMIN_HAPP_LETTERSTATUSSERVICE_HAPP_MAIL_LETTER_STATUS_ACTIVE`,
        name: `Active`,
        description: `Letter is active.`,
        isDeleted: false,
        isNotDelete: true,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString()
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: LetterStatusSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: LetterStatusSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}