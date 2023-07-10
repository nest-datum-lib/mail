import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
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
				id: `happ-mail-letter-base-recovery`,
				userId: `happ-sso-user-admin`,
				letterStatusId: `happ-mail-letter-status-active`,
				templateId: `happ-mail-template-base-recovery`,
				name: `Base recovery`,
				description: `Base recovery.`,
				subject: `Hello`,
				textPart: `Password recovery`,
				isDeleted: false,
				isNotDelete: true,
				createdAt: (new Date()).toLocaleString(),
				updatedAt: (new Date()).toLocaleString(),
				envKey: `HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_RECOVERY`
			},
			{
				id: `happ-mail-letter-base-registration`,
				userId: `happ-sso-user-admin`,
				letterStatusId: `happ-mail-letter-status-active`,
				templateId: `happ-mail-template-base-registration`,
				name: `Base registration`,
				description: `Base recovery.`,
				subject: `Hello`,
				textPart: `Successful registration`,
				isDeleted: false,
				isNotDelete: true,
				createdAt: (new Date()).toLocaleString(),
				updatedAt: (new Date()).toLocaleString(),
				envKey: `HAPP_SSO_USER_ADMIN_HAPP_LETTERSERVICE_HAPP_MAIL_LETTER_BASE_REGISTRATION`
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: LetterSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: LetterSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}