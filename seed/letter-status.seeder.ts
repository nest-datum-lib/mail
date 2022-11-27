import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { LetterStatus } from 'src/api/letter-status/letter-status.entity';

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
				id: 'mail-letter-status-active',
				name: 'Active',
				description: 'Letter is active',
				userId: 'sso-user-admin',
			}], async (data) => {
				try {
					await this.letterStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: letter-status 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: letter-status 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}