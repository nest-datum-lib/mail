import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Letter } from 'src/api/letter/letter.entity';
import { LetterStatus } from 'src/api/letter-status/letter-status.entity';
import { encryptPassword } from '@nest-datum/jwt';

export class LetterSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Letter) private readonly letterRepository: Repository<Letter>,
		@InjectRepository(LetterStatus) private readonly letterStatusRepository: Repository<LetterStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'mail-letter-register',
				userId: 'sso-user-admin',
				letterStatusId: 'mail-letter-status-active',
				templateId: 'mail-template-register',
				name: 'Register',
				description: 'Letter with a link to confirm registration.',
				subject: 'Completion of registration',
				textPart: 'Completion of registration',
				isNotDelete: true,
			}, {
				id: 'mail-letter-recovery',
				userId: 'sso-user-admin',
				letterStatusId: 'mail-letter-status-active',
				templateId: 'mail-template-recovery',
				name: 'Recovery',
				description: 'Account recovery.',
				subject: 'Account recovery',
				textPart: 'Account recovery',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.letterRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: letter 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: letter 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}