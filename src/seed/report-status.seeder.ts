import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { ReportStatus } from '../api/report-status/report-status.entity';
import {
	USER_DEFAULT_ID,
	REPORT_STATUS_SEND_ID,
	REPORT_STATUS_SENT_ID,
} from './consts';

export class ReportStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(ReportStatus) private readonly reportStatusRepository: Repository<ReportStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: REPORT_STATUS_SEND_ID,
				userId: USER_DEFAULT_ID,
				name: 'Set to send',
				description: 'Set letter to sending queue.',
				isNotDelete: true,
			}, {
				id: REPORT_STATUS_SENT_ID,
				userId: USER_DEFAULT_ID,
				name: 'Sent',
				description: 'Letter successfully sent.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.reportStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: ReportStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: ReportStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}