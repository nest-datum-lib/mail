import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { Letter } from '../api/letter/letter.entity';
import {
	USER_DEFAULT_ID,
	LETTER_STATUS_ACTIVE_ID,
	TEMPLATE_BASE_RECOVERY_ID,
	TEMPLATE_BASE_REGISTRATION_ID,
	LETTER_BASE_RECOVERY_ID,
	LETTER_BASE_REGISTRATION_ID,
} from './consts';

export class LetterSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Letter) private readonly letterRepository: Repository<Letter>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: LETTER_BASE_RECOVERY_ID,
				userId: USER_DEFAULT_ID,
				letterStatusId: LETTER_STATUS_ACTIVE_ID,
				templateId: TEMPLATE_BASE_RECOVERY_ID,
				name: 'Base recovery',
				description: 'Base recovery.',
				subject: 'Hello',
				textPart: 'Password recovery',
				isNotDelete: true,
			}, {
				id: LETTER_BASE_REGISTRATION_ID,
				userId: USER_DEFAULT_ID,
				letterStatusId: LETTER_STATUS_ACTIVE_ID,
				templateId: TEMPLATE_BASE_REGISTRATION_ID,
				name: 'Base registration',
				description: 'Base registration.',
				subject: 'Hello',
				textPart: 'Successful registration',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.letterRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Letter 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Letter 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}