import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { WarningException } from '@nest-datum-common/exceptions';
import { TransportService } from '@nest-datum/transport';
import { TcpController } from '@nest-datum/controller';
import { 
	str as utilsCheckStr,
	strId as utilsCheckStrId,
	strName as utilsCheckStrName,
	strEmail as utilsCheckStrEmail,
	strDescription as utilsCheckStrDescription,
} from '@nest-datum-utils/check';
import { 
	checkToken,
	getUser, 
} from '@nest-datum/jwt';
import { ReportService } from './report.service';

@Controller()
export class ReportController extends TcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: ReportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrDescription(options['action'])) {
			throw new WarningException(`Property "action" is not valid.`);
		}
		if (!utilsCheckStr(options['content'])) {
			throw new WarningException(`Property "content" is not valid.`);
		}
		if (!utilsCheckStrId(options['letterId'])) {
			throw new WarningException(`Property "letterId" is not valid.`);
		}
		if (!utilsCheckStrId(options['reportStatusId'])) {
			throw new WarningException(`Property "reportStatusId" is not valid.`);
		}
		if (!utilsCheckStrEmail(options['email'])) {
			throw new WarningException(`Property "email" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		if (!checkToken(options['accessToken'], process.env.JWT_SECRET_ACCESS_KEY)) {
			throw new WarningException(`User is undefined or token is not valid.`);
		}
		const user = getUser(options['accessToken']);

		return {
			...await super.validateUpdate(options),
			login: user['login'],
			...(options['email'] && utilsCheckStrEmail(options['email'])) 
				? { email: options['email'] } 
				: {},
			...(options['action'] && utilsCheckStrDescription(options['action'])) 
				? { action: options['action'] } 
				: {},
			...(options['content'] && utilsCheckStr(options['content'])) 
				? { content: JSON.parse(options['content']) } 
				: {},
			...(options['reportStatusId'] && utilsCheckStrId(options['reportStatusId'])) 
				? { reportStatusId: options['reportStatusId'] } 
				: {},
			...(options['letterId'] && utilsCheckStrId(options['letterId'])) 
				? { letterId: options['letterId'] } 
				: {},
		};
	}

	@MessagePattern({ cmd: 'report.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'report.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('report.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('report.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('report.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('report.update')
	async update(payload) {
		return await super.update(payload);
	}
}
