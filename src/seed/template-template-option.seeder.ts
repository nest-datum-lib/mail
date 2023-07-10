import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateTemplateOption } from '../api/template-template-option/template-template-option.entity';

export class TemplateTemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateTemplateOption) private readonly userRepository: Repository<TemplateTemplateOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: `happ-mail-2template-option-register`,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString(),
        templateOptionId: `happ-mail-template-option-view`,
        templateId: `happ-mail-template-base-registration`
			},
			{
				id: `happ-mail-2template-option-recovery`,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString(),
        templateOptionId: `happ-mail-template-option-view`,
        templateId: `happ-mail-template-base-recovery`
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TemplateTemplateOptionSeeder 1: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TemplateTemplateOptionSeeder 2: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}