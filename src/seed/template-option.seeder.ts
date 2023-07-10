import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateOption } from '../api/template-option/template-option.entity';

export class TemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateOption) private readonly userRepository: Repository<TemplateOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: `happ-mail-template-option-view`,
				userId: `happ-sso-user-admin`,
				dataTypeId: `files-system-email-views`,
				envKey: `HAPP_MAIL_TEMPLATE_OPTION_VIEW`,
				name: `View`,
				description: `Letter view.`,
				isDeleted: false,
				isNotDelete: true,
				createdAt: (new Date()).toLocaleString(),
				updatedAt: (new Date()).toLocaleString(),
				defaultValue: ``,
				regex: ``,
				isRequired: true,
				isMultiline: false,
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateOptionSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateOptionSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}
