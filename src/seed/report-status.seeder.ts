import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { ReportStatus } from '../api/report-status/report-status.entity';

export class ReportStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(ReportStatus) private readonly userRepository: Repository<ReportStatus>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: `happ-mail-report-status-active`,
        userId: `happ-sso-user-admin`,
        envKey: `HAPP_MAIL_REPORT_STATUS_ACTIVE`,
        name: `Active`,
        description: `Active.`,
        isDeleted: false,
        isNotDelete: true,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString()
			},
      {
				id: `happ-mail-report-status-send`,
        userId: `happ-sso-user-admin`,
        envKey: `HAPP_MAIL_REPORT_STATUS_SEND`,
        name: `Send`,
        description: `Run sending process.`,
        isDeleted: false,
        isNotDelete: true,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString()
			},
      {
				id: `happ-mail-report-status-sent`,
        userId: `happ-sso-user-admin`,
        envKey: `HAPP_MAIL_REPORT_STATUS_SENT`,
        name: `Sent`,
        description: `Letter sent.`,
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

					console.error(`ERROR: ReportStatusSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: ReportStatusSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}