import { 
	Controller,
	Post,
	Patch,
	Body,
	Param,
	UnauthorizedException,
	MethodNotAllowedException,
} from '@nestjs/common';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import { HttpTcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	str as utilsCheckStr,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_MAIL}/report`)
export class ReportHttpTcpController extends HttpTcpController {
	protected readonly serviceName: string = process.env.SERVICE_MAIL;
	protected readonly entityName: string = 'report';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrDescription(options['action'])) {
			throw new MethodNotAllowedException(`Property "action" is not valid.`);
		}
		if (!utilsCheckStr(options['content'])) {
			throw new MethodNotAllowedException(`Property "content" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterId'])) {
			throw new MethodNotAllowedException(`Property "letterId" is not valid.`);
		}
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new MethodNotAllowedException(`Property "reportStatusId" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['email'])) {
			throw new MethodNotAllowedException(`Property "email" is not valid.`);
		}
		return await super.validateCreate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckExists(options['letterId'])) {
			if (!utilsCheckStrId(options['letterId'])) {
				throw new MethodNotAllowedException(`Property "letterId" is not valid.`);
			}
			output['letterId'] = options['letterId'];
		}
		if (utilsCheckExists(options['reportStatusId'])) {
			if (!utilsCheckStrId(options['reportStatusId'])) {
				throw new MethodNotAllowedException(`Property "reportStatusId" is not valid.`);
			}
			output['reportStatusId'] = options['reportStatusId'];
		}
		if (utilsCheckExists(options['action'])) {
			if (!utilsCheckStrDescription(options['action'])) {
				throw new MethodNotAllowedException(`Property "action" is not valid.`);
			}
			output['action'] = options['action'];
		}
		if (utilsCheckExists(options['description'])) {
			if (!utilsCheckStrDescription(options['description'])) {
				throw new MethodNotAllowedException(`Property "description" is not valid.`);
			}
			output['description'] = options['description'];
		}
		if (utilsCheckExists(options['content'])) {
			if (!utilsCheckStr(options['content'])) {
				throw new MethodNotAllowedException(`Property "content" is not valid.`);
			}
			output['content'] = options['content'];
		}
		if (utilsCheckStrFilled(options['email'])) {
			if (!utilsCheckStrEmail(options['email'])) {
				throw new MethodNotAllowedException(`Property "email" is not valid.`);
			}
			output['email'] = options['email'];
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
		@Body('letterId') letterId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('email') email: string,
		@Body('action') action: string,
		@Body('content') content: string,
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
			letterId,
			reportStatusId,
			email,
			action,
			content,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('letterId') letterId: string,
		@Body('reportStatusId') reportStatusId: string,
		@Body('email') email: string,
		@Body('action') action: string,
		@Body('content') content: string,
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
			letterId,
			reportStatusId,
			email,
			action,
			content,
			isNotDelete,
			isDeleted,
		})));
	}
}
