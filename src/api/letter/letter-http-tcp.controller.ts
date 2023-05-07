import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	UnauthorizedException,
	MethodNotAllowedException,
} from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { checkToken } from '@nest-datum-common/jwt';
import { AccessToken } from '@nest-datum-common/decorators';
import { MainHttpTcpController } from '@nest-datum/main';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_MAIL}/letter`)
export class LetterHttpTcpController extends MainHttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'letter';
	protected readonly entityManyName: string = 'letterOptionRelation';
	protected readonly mainRelationColumnName: string = 'letterId';
	protected readonly optionRelationColumnName: string = 'letterOptionId';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new MethodNotAllowedException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterStatusId'])) {
			throw new MethodNotAllowedException(`Property "letterStatusId" is not valid.`);
		}
		if (!utilsCheckStrId(options['templateId'])) {
			throw new MethodNotAllowedException(`Property "templateId" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['subject'])) {
			throw new MethodNotAllowedException(`Property "subject" is not valid.`);
		}
		if (!utilsCheckStrDescription(options['textPart'])) {
			throw new MethodNotAllowedException(`Property "textPart" is not valid.`);
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
		if (utilsCheckExists(options['templateId'])) {
			if (!utilsCheckStrId(options['templateId'])) {
				throw new MethodNotAllowedException(`Property "templateId" is not valid.`);
			}
			output['templateId'] = options['templateId'];
		}
		if (utilsCheckExists(options['letterStatusId'])) {
			if (!utilsCheckStrId(options['letterStatusId'])) {
				throw new MethodNotAllowedException(`Property "letterStatusId" is not valid.`);
			}
			output['letterStatusId'] = options['letterStatusId'];
		}
		if (utilsCheckStrFilled(options['subject'])) {
			if (!utilsCheckStrDescription(options['subject'])) {
				throw new MethodNotAllowedException(`Property "subject" is not valid.`);
			}
			output['subject'] = options['subject'];
		}
		if (utilsCheckStrFilled(options['textPart'])) {
			if (!utilsCheckStrDescription(options['textPart'])) {
				throw new MethodNotAllowedException(`Property "textPart" is not valid.`);
			}
			output['textPart'] = options['textPart'];
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
		@Body('templateId') templateId: string,
		@Body('letterStatusId') letterStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('subject') subject: string,
		@Body('textPart') textPart: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			templateId,
			letterStatusId,
			envKey,
			name,
			description,
			subject,
			textPart,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('templateId') templateId: string,
		@Body('letterStatusId') letterStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('subject') subject: string,
		@Body('textPart') textPart: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(
			async () => await this.transport.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			templateId,
			letterStatusId,
			envKey,
			name,
			description,
			subject,
			textPart,
			isNotDelete,
			isDeleted,
		})));
	}
}
