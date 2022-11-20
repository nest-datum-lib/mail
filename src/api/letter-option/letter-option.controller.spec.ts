import { Test, TestingModule } from '@nestjs/testing';
import { LetterOptionController } from './letter-option.controller';

describe('LetterOptionController', () => {
	let controller: LetterOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LetterOptionController],
		}).compile();

		controller = module.get<LetterOptionController>(LetterOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
