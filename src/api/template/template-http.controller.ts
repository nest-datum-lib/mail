import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	MethodNotAllowedException,
} from '@nestjs/common';
import { checkToken } from '@nest-datum-common/jwt';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';
import { TemplateTemplateOptionService } from '../template-template-option/template-template-option.service';
import { TemplateTemplateTemplateOptionService } from '../template-template-template-option/template-template-template-option.service';
import { TemplateService } from './template.service';

@Controller(`${process.env.SERVICE_MAIL}/template`)
export class TemplateHttpController extends MainHttpController {
	protected readonly mainRelationColumnName: string = 'templateId';
	protected readonly optionRelationColumnName: string = 'templateOptionId';

	constructor(
		protected service: TemplateService,
		protected readonly serviceOptionContent: TemplateTemplateTemplateOptionService,
		protected readonly serviceOptionRelation: TemplateTemplateOptionService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateStatusId'])) {
			throw new MethodNotAllowedException(`Property "templateStatusId" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['fromEmail'])) {
			throw new MethodNotAllowedException(`Property "fromEmail" is not valid.`);
		}
		if (!utilsCheckStrName(options['fromName'])) {
			throw new MethodNotAllowedException(`Property "fromName" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['envKey'])) {
			if (!utilsCheckStrEnvKey(options['envKey'])) {
				throw new MethodNotAllowedException(`Property "envKey" is not valid.`);
			}
			output['envKey'] = options['envKey'];
		}
		if (utilsCheckExists(options['templateStatusId'])) {
			if (!utilsCheckStrId(options['templateStatusId'])) {
				throw new MethodNotAllowedException(`Property "templateStatusId" is not valid.`);
			}
			output['templateStatusId'] = options['templateStatusId'];
		}
		if (utilsCheckExists(options['parentId'])) {
			if (!utilsCheckStrId(options['parentId'])) {
				throw new MethodNotAllowedException(`Property "parentId" is not valid.`);
			}
			output['parentId'] = options['parentId'];
		}
		if (utilsCheckStrFilled(options['fromEmail'])) {
			if (!utilsCheckStrEmail(options['fromEmail'])) {
				throw new MethodNotAllowedException(`Property "fromEmail" is not valid.`);
			}
			output['fromEmail'] = options['fromEmail'];
		}
		if (utilsCheckStrFilled(options['fromName'])) {
			if (!utilsCheckStrName(options['fromName'])) {
				throw new MethodNotAllowedException(`Property "fromName" is not valid.`);
			}
			output['fromName'] = options['fromName'];
		}
		if (utilsCheckExists(options['name'])) {
			if (!utilsCheckStrName(options['name'])) {
				throw new MethodNotAllowedException(`Property "name" is not valid.`);
			}
			output['name'] = options['name'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		return {
			...await super.validateUpdate(options),
			...output,
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.create(await this.validateCreate({
			accessToken,
			id,
			userId,
			templateStatusId,
			envKey,
			name,
			description,
			fromEmail,
			fromName,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('templateStatusId') templateStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('fromEmail') fromEmail: string,
		@Body('fromName') fromName: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.service.update(await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			templateStatusId,
			envKey,
			name,
			description,
			fromEmail,
			fromName,
			isNotDelete,
			isDeleted,
		})));
	}
}
