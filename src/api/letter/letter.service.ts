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
import { Letter } from './letter.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';

@Injectable()
export class LetterService extends MysqlService {
	constructor(
		@InjectRepository(Letter) private readonly letterRepository: Repository<Letter>,
		@InjectRepository(LetterLetterLetterOption) private readonly letterLetterLetterOptionRepository: Repository<LetterLetterLetterOption>,
		@InjectRepository(LetterLetterOption) private readonly letterLetterOptionRepository: Repository<LetterLetterOption>,
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
		templateId: true,
		letterStatusId: true,
		name: true,
		description: true,
		subject: true,
		textPart: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
		subject: true,
		textPart: true,
	};

	async many(payload): Promise<any> {
		try {
			const cachedData = await this.cacheService.get(`${process.env.APP_ID}.letter.many`, payload);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterRepository.findAndCount(await this.findMany(payload));

			await this.cacheService.set(`${process.env.APP_ID}.letter.many`, payload, output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), payload);
		}

		return [ [], 0 ];
	}

	async one(payload): Promise<any> {
		try {
			const cachedData = await this.cacheService.get(`${process.env.APP_ID}.letter.one`, payload);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterRepository.findOne(await this.findOne(payload));
		
			await this.cacheService.set(`${process.env.APP_ID}.letter.one`, payload, output);

			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), payload);
		}
	}

	async drop(payload): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letter.one`, payload);

			await this.letterLetterLetterOptionRepository.delete({ letterId: payload['id'] });
			await this.letterLetterOptionRepository.delete({ letterId: payload['id'] });
			await this.dropByIsDeleted(this.letterRepository, payload['id']);

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

	async dropMany(payload): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letter.one`, payload);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.letterLetterLetterOptionRepository.delete({ letterId: payload['ids'][i] });
				await this.letterLetterOptionRepository.delete({ letterId: payload['ids'][i] });
				await this.dropByIsDeleted(this.letterRepository, payload['ids'][i]);
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

	async dropOption(payload): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.one`);
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letterOption.many`);

			await this.letterLetterLetterOptionRepository.delete({ letterLetterOptionId: payload['id'] });
			await this.letterLetterOptionRepository.delete({ id: payload['id'] });

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
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);

			const output = await this.letterRepository.save({
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

	async createOption({ 
		user, 
		id,
		optionId, 
		data, 
	}): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner();

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.one`);
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letterOption.many`);

			const letterLetterOption = await this.letterLetterOptionRepository.save({
				letterId: id,
				letterOptionId: optionId,
				...data,
			});
			
			const output = await this.one({
				user,
				id,
			});

			output['letterLetterOptions'] = [ letterLetterOption ];

			await queryRunner.commitTransaction();

			return output;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, optionId, data });
		}
		finally {
			await queryRunner.release();
		}
	}

	async createOptions({ user, id, data }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner();

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);

			await this.letterLetterLetterOptionRepository.delete({
				letterId: id,
			});

			let i = 0,
				ii = 0;

			while (i < data.length) {
				ii = 0;

				const option = data[i];

				while (ii < option.length) {
					const {
						entityOptionId,
						entityId,
						id: itemId,
						...optionData
					} = option[ii];

					const output = await this.letterLetterLetterOptionRepository.save({
						...optionData,
						letterId: id,
						letterLetterOptionId: entityOptionId,
					});

					ii++;
				}
				i++;
			}
			await queryRunner.commitTransaction();
			
			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, data });
		}
		finally {
			await queryRunner.release();
		}
	}

	async update({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear(`${process.env.APP_ID}.letter.many`);
			await this.cacheService.clear(`${process.env.APP_ID}.letter.one`);
			
			await this.updateWithId(this.letterRepository, payload);
			
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
