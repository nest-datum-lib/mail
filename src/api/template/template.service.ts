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
import { Template } from './template.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';

@Injectable()
export class TemplateService extends SqlService {
	constructor(
		@InjectRepository(Template) private readonly templateRepository: Repository<Template>,
		@InjectRepository(TemplateTemplateTemplateOption) private readonly templateTemplateTemplateOptionRepository: Repository<TemplateTemplateTemplateOption>,
		@InjectRepository(TemplateTemplateOption) private readonly templateTemplateOptionRepository: Repository<TemplateTemplateOption>,
		private readonly connection: Connection,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		userId: true,
		templateStatusId: true,
		name: true,
		description: true,
		fromEmail: true,
		fromName: true,
		isDeleted: true,
		isNotDelete: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
		name: true,
		description: true,
		fromEmail: true,
		fromName: true,
	};

	async many({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'template', 'many', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.templateRepository.findAndCount(await this.findMany(payload));

			await this.cacheService.set([ 'template', 'many', payload ], output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		return [ [], 0 ];
	}

	async one({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'template', 'one', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.templateRepository.findOne(await this.findOne(payload));
		
			if (output) {
				await this.cacheService.set([ 'template', 'one', payload ], output);
			}
			if (!output) {
				return new NotFoundException('Entity is undefined', getCurrentLine(), { user, ...payload });
			}
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
	}

	async drop({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'one', payload ]);

			await this.templateTemplateTemplateOptionRepository.delete({ templateId: payload['id'] });
			await this.templateTemplateOptionRepository.delete({ templateId: payload['id'] });
			await this.dropByIsDeleted(this.templateRepository, payload['id']);

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

	async dropMany({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'one', payload ]);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.templateTemplateTemplateOptionRepository.delete({ templateId: payload['ids'][i] });
				await this.templateTemplateOptionRepository.delete({ templateId: payload['ids'][i] });
				await this.dropByIsDeleted(this.templateRepository, payload['ids'][i]);
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

	async dropOption({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear([ 'template', 'one' ]);
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'option', 'many' ]);

			await this.templateTemplateTemplateOptionRepository.delete({ templateTemplateOptionId: payload['id'] });
			await this.templateTemplateOptionRepository.delete({ id: payload['id'] });

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

	async create({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			await this.cacheService.clear([ 'template', 'many' ]);

			const output = await this.templateRepository.save({
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
			await this.cacheService.clear([ 'template', 'one' ]);
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'option', 'many' ]);

			const templateTemplateOption = await this.templateTemplateOptionRepository.save({
				templateId: id,
				templateOptionId: optionId,
				...data,
			});
			
			const output = await this.one({
				user,
				id,
			});

			output['templateTemplateOptions'] = [ templateTemplateOption ];

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
			await this.cacheService.clear([ 'template', 'many' ]);

			await this.templateTemplateTemplateOptionRepository.delete({
				templateId: id,
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

					const output = await this.templateTemplateTemplateOptionRepository.save({
						...optionData,
						templateId: id,
						templateTemplateOptionId: entityOptionId,
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
			await this.cacheService.clear([ 'template', 'many' ]);
			await this.cacheService.clear([ 'template', 'one' ]);
			
			await this.updateWithId(this.templateRepository, payload);
			
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
