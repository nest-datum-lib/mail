import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
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
				id: `happ-mail-template-status-active`,
        userId: `happ-sso-user-admin`,
        envKey: `HAPP_MAIL_TEMPLATE_STATUS_ACTIVE`,
        name: `Active`,
        description: `Template is active.`,
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

					console.error(`ERROR: TemplateStatusSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateStatusSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}