import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MethodNotAllowedException } from '@nest-datum-common/exceptions';
import { TcpController } from '@nest-datum-common/controllers';
import { 
	exists as utilsCheckExists,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
	strDescription as utilsCheckStrDescription,
	strFilled as utilsCheckStrFilled,
	strEmail as utilsCheckStrEmail,
	strEnvKey as utilsCheckStrEnvKey,
} from '@nest-datum-utils/check';
import { TemplateService } from './template.service';

@Controller()
export class TemplateTcpController extends TcpController {
	constructor(
		protected service: TemplateService,
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
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		const output = {};

		if (utilsCheckStrFilled(options['envKey'])) {
			if (!utilsCheckStrEnvKey(options['envKey'])) {
				throw new MethodNotAllowedException(`Property "envKey" is not valid.`);
			}
			output['envKey'] = options['envKey'];
		}
		if (utilsCheckExists(options['userId'])) {
			if (!utilsCheckStrId(options['userId'])) {
				throw new MethodNotAllowedException(`Property "userId" is not valid.`);
			}
			output['userId'] = options['userId'];
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

	@MessagePattern({ cmd: 'template.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'template.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('template.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('template.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('template.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('template.update')
	async update(payload: object = {}) {
		return await super.update(payload);
	}
}
