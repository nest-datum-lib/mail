import { v4 as uuidv4 } from 'uuid';
import Redis from 'ioredis';
import getCurrentLine from 'get-current-line';
import { 
	Inject,
	Injectable, 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { 
	MysqlService,
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { ErrorException } from '@nest-datum/exceptions';
import { LetterStatus } from './letter-status.entity';

@Injectable()
export class LetterStatusService extends MysqlService {
	constructor(
		@InjectRepository(LetterStatus) private readonly letterStatusRepository: Repository<LetterStatus>,
		private readonly connection: Connection,
		private readonly registryService: RegistryService,
		private readonly logsService: LogsService,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		name: true,
		description: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
	};

	async many(payload): Promise<any> {
		try {
			const cachedData = await this.cacheService.get(`${process.env.APP_ID}.letterStatus.many`, payload);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterStatusRepository.findAndCount(await this.findMany(payload));

			await this.cacheService.set(`${process.env.APP_ID}.letterStatus.many`, payload, output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), payload);
		}

		return [ [], 0 ];
	}

	async one(payload): Promise<any> {
		try {
			const cachedData = await this.cacheService.get(`${process.env.APP_ID}.letterStatus.one`, payload);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterStatusRepository.findOne(await this.findOne(payload));
		
			await this.cacheService.set(`${process.env.APP_ID}.letterStatus.one`, payload, output);

			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), payload);
		}
	}

	async drop(payload): Promise<any> {
		try {
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.one`, payload);

			await this.dropByIsDeleted(this.letterStatusRepository, payload['id']);

			return true;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), payload);
		}
	}

	async dropMany(payload): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.one`, payload);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.dropByIsDeleted(this.letterStatusRepository, payload['ids'][i]);
				i++;
			}
			await queryRunner.commitTransaction();

			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), payload);
		}
		finally {
			await queryRunner.release();
		}
	}

	async create({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.many`);

			const output = await this.letterStatusRepository.save({
				...payload,
				userId: payload['userId'] || user['id'] || '',
			});

			await queryRunner.commitTransaction();

			return output;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async update({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letterStatus.one`);
			
			await this.updateWithId(this.letterStatusRepository, payload);
			
			await queryRunner.commitTransaction();
			
			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}
}
