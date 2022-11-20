import { Test, TestingModule } from '@nestjs/testing';
import { LetterStatusController } from './letter-status.controller';

describe('LetterStatusController', () => {
	let controller: LetterStatusController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LetterStatusController],
		}).compile();

		controller = module.get<LetterStatusController>(LetterStatusController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
