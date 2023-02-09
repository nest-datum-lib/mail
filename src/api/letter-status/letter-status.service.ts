import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService as NestDatumStatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { LetterStatus } from './letter-status.entity';

@Injectable()
export class LetterStatusService extends NestDatumStatusService {
	public entityConstructor = LetterStatus;

	constructor(
		@InjectRepository(LetterStatus) public repository: Repository<LetterStatus>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
