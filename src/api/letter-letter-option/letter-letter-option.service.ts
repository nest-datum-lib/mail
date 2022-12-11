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
import { SqlService } from 'nest-datum/sql/src';
import { CacheService } from 'nest-datum/cache/src';
import { 
	ErrorException,
	NotFoundException, 
} from 'nest-datum/exceptions/src';
import { LetterLetterOption } from './letter-letter-option.entity';

@Injectable()
export class LetterLetterOptionService extends SqlService {
	constructor(
		@InjectRepository(LetterLetterOption) private readonly letterLetterOptionRepository: Repository<LetterLetterOption>,
		private readonly connection: Connection,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		letterId: true,
		letterOptionId: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
	};

	async many({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'letter', 'option', 'relation', 'many', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterLetterOptionRepository.findAndCount(await this.findMany(payload));

			this.cacheService.set([ 'letter', 'option', 'relation', 'many', payload ], output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}

		return [ [], 0 ];
	}

	async one({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'letter', 'option', 'relation', 'one' , payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.letterLetterOptionRepository.findOne(await this.findOne(payload));
		
			if (output) {
				this.cacheService.set([ 'letter', 'option', 'relation', 'one', payload ], output);
			}
			else {
				return new NotFoundException('Entity is undefined', getCurrentLine(), { user, ...payload });
			}
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
	}

	async drop({ user, id }): Promise<any> {
		try {
			this.cacheService.clear([ 'letter', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'letter', 'option', 'relation', 'one', id ]);
			this.cacheService.clear([ 'letter', 'option', 'many' ]);
			this.cacheService.clear([ 'letter', 'option', 'one' ]);
			this.cacheService.clear([ 'letter', 'one' ]);

			await this.letterLetterOptionRepository.delete({ id });

			return true;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, id });
		}
	}

	async dropMany({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'letter', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'letter', 'option', 'relation', 'one', payload ]);
			this.cacheService.clear([ 'letter', 'option', 'many' ]);
			this.cacheService.clear([ 'letter', 'many' ]);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.dropByIsDeleted(this.letterLetterOptionRepository, payload['ids'][i]);
				i++;
			}
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

	async create({ user, id, letterId, letterOptionId }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();

			this.cacheService.clear([ 'letter', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'letter', 'option', 'many' ]);
			this.cacheService.clear([ 'letter', 'option', 'one' ]);
			this.cacheService.clear([ 'letter', 'many' ]);
			this.cacheService.clear([ 'letter', 'one' ]);

			const userId = (user
				&& typeof user === 'object')
				? (user['id'] || '')
				: '';
			const letterOptionRelation = await this.letterLetterOptionRepository.save({
				id: id || uuidv4(),
				userId,
				letterId,
				letterOptionId,
			});
			
			letterOptionRelation['userId'] = userId;

			await queryRunner.commitTransaction();

			return letterOptionRelation;
		}
		catch (err) {
			console.log('errr', err);

			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, letterId, letterOptionId });
		}
		finally {
			await queryRunner.release();
		}
	}
}