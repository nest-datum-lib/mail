import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { 
	ErrorException,
	WarningException, 
	NotFoundException,
} from '@nest-datum-common/exceptions';
import { SqlService } from '@nest-datum/sql';
import { CacheService } from '@nest-datum/cache';
import {
	encryptPassword,
	generateVerifyKey,
	generateTokens,
	checkPassword,
} from '@nest-datum/jwt';
import { Report } from './report.entity';

@Injectable()
export class ReportService extends SqlService {
	public entityName = 'report';
	public entityConstructor = Report;
	
	constructor(
		@InjectRepository(Report) public repository: Repository<Report>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		reportStatusId: true,
		action: true,
		content: true,
		createdAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		action: true,
	};
}
