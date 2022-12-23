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
import { TemplateTemplateOption } from './template-template-option.entity';

@Injectable()
export class TemplateTemplateOptionService extends SqlService {
	constructor(
		@InjectRepository(TemplateTemplateOption) private readonly templateTemplateOptionRepository: Repository<TemplateTemplateOption>,
		private readonly connection: Connection,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		templateId: true,
		templateOptionId: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
	};

	async many({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'template', 'option', 'relation', 'many', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.templateTemplateOptionRepository.findAndCount(await this.findMany(payload));

			this.cacheService.set([ 'template', 'option', 'relation', 'many', payload ], output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}

		return [ [], 0 ];
	}

	async one({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'template', 'option', 'relation', 'one' , payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.templateTemplateOptionRepository.findOne(await this.findOne(payload));
		
			if (output) {
				this.cacheService.set([ 'template', 'option', 'relation', 'one', payload ], output);
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
			this.cacheService.clear([ 'template', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'template', 'option', 'relation', 'one', id ]);
			this.cacheService.clear([ 'template', 'option', 'many' ]);
			this.cacheService.clear([ 'template', 'option', 'one' ]);
			this.cacheService.clear([ 'template', 'one' ]);

			await this.templateTemplateOptionRepository.delete({ id });

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
			
			this.cacheService.clear([ 'template', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'template', 'option', 'relation', 'one', payload ]);
			this.cacheService.clear([ 'template', 'option', 'many' ]);
			this.cacheService.clear([ 'template', 'many' ]);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.dropByIsDeleted(this.templateTemplateOptionRepository, payload['ids'][i]);
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

	async create({ user, id, templateId, templateOptionId }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();

			this.cacheService.clear([ 'template', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'template', 'option', 'many' ]);
			this.cacheService.clear([ 'template', 'option', 'one' ]);
			this.cacheService.clear([ 'template', 'many' ]);
			this.cacheService.clear([ 'template', 'one' ]);

			const userId = (user
				&& typeof user === 'object')
				? (user['id'] || '')
				: '';
			const templateOptionRelation = await this.templateTemplateOptionRepository.save({
				id: id || uuidv4(),
				userId,
				templateId,
				templateOptionId,
			});
			
			templateOptionRelation['userId'] = userId;

			await queryRunner.commitTransaction();

			return templateOptionRelation;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, templateId, templateOptionId });
		}
		finally {
			await queryRunner.release();
		}
	}
}
