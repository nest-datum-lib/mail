import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
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
				id: "d277bbbb-df30-11ed-b458-6014b35bf59f",
        parentId: "",
        content: "4ee63088-a2ac-4b4b-873e-b98ef31095af",
        templateTemplateOptionId: "6a969352-27b6-475a-96e2-f160571a417a",
        templateId: "happ-mail-template-base-recovery",
        createdAt: "04/19/2023 06:31:48+0",
        updatedAt: "04/19/2023 06:31:48+0",
			},
			{
				id: "f2fe6874-df30-11ed-b458-6014b35bf59f",
        parentId: "",
        content: "7bc93bb0-c464-4d36-ade0-3edf2c89c0a0",
        templateTemplateOptionId: "16090155-60d4-45f6-91cb-a482d670e08c",
        templateId: "happ-mail-template-base-registration",
        createdAt: "04/19/2023 06:31:48+0",
        updatedAt: "04/19/2023 06:31:48+0",
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