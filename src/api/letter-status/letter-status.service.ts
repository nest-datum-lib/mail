import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { LetterStatus } from './letter-status.entity';

@Injectable()
export class LetterStatusService extends StatusService {
	protected entityName = 'letterStatus';
	protected entityConstructor = LetterStatus;

	constructor(
		@InjectRepository(LetterStatus) protected entityRepository: Repository<LetterStatus>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
