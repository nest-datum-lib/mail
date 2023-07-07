import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
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
				id: "16090155-60d4-45f6-91cb-a482d670e08c",
        createdAt: "04/19/2023 06:31:48+0",
        updatedAt: "04/19/2023 06:31:48+0",
        templateOptionId: "happ-mail-template-option-view",
        templateId: "happ-mail-template-base-registration"
			},
			{
				id: "6a969352-27b6-475a-96e2-f160571a417a",
        createdAt: "04/19/2023 06:31:48+0",
        updatedAt: "04/19/2023 06:31:48+0",
        templateOptionId: "happ-mail-template-option-view",
        templateId: "happ-mail-template-base-recovery"
			}], async (data) => {
				try {
					await this.userRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: user 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: user 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}