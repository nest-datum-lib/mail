import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TemplateTemplateTemplateOption } from '../api/template-template-template-option/template-template-template-option.entity';

export class TemplateTemplateTemplateOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TemplateTemplateTemplateOption) private readonly userRepository: Repository<TemplateTemplateTemplateOption>,
	) {}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
      // new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: `happ-mail-3template-option-recovery`,
        parentId: ``,
        content: `happ-mail-3template-option-recovery`,
        templateTemplateOptionId: `happ-mail-2template-option-recovery`,
        templateId: `happ-mail-template-base-recovery`,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString(),
			},
			{
				id: `happ-mail-3template-option-register`,
        parentId: ``,
        content: `happ-mail-3template-option-register`,
        templateTemplateOptionId: `happ-mail-2template-option-register`,
        templateId: `happ-mail-template-base-registration`,
        createdAt: (new Date()).toLocaleString(),
        updatedAt: (new Date()).toLocaleString(),
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