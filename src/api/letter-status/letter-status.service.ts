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
	protected readonly entityName: string = 'letterStatus';
	protected readonly repositoryConstructor = LetterStatus;

	constructor(
		@InjectRepository(LetterStatus) protected readonly repository: Repository<LetterStatus>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}
}
