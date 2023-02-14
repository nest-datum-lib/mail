import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { LetterStatus } from '../api/letter-status/letter-status.entity';
import {
	USER_DEFAULT_ID,
	LETTER_STATUS_ACTIVE_ID,
} from './consts';

export class LetterStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(LetterStatus) private readonly letterStatusRepository: Repository<LetterStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: LETTER_STATUS_ACTIVE_ID,
				userId: USER_DEFAULT_ID,
				name: 'Active',
				description: 'Role is active.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.letterStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: LetterStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: LetterStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}