import { Test, TestingModule } from '@nestjs/testing';
import { LetterLetterOptionController } from './letter-letter-option.controller';

describe('LetterLetterOptionController', () => {
	let controller: LetterLetterOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LetterLetterOptionController],
		}).compile();

		controller = module.get<LetterLetterOptionController>(LetterLetterOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
