import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum-common/jwt';
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
				id: "happ-mail-template-option-view",
        userId: "happ-sso-user-admin",
        dataTypeId: "happ-data-type-file-select",
        envKey: "HAPP_MAIL_TEMPLATE_OPTION_VIEW",
        name: "View",
        description: "Letter view.",
        isDeleted: false,
        isNotDelete: true,
        createdAt: "04/19/2023 06:33:40+0",
        updatedAt: "04/19/2023 06:33:40+0",
        defaultValue: "",
        regex: "",
        isRequired: true, 
        isMultiline: false,
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