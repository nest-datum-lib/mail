import { Test, TestingModule } from '@nestjs/testing';
import { LetterStatusService } from './letter-status.service';

describe('LetterStatusService', () => {
	let service: LetterStatusService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LetterStatusService],
		}).compile();

		service = module.get<LetterStatusService>(LetterStatusService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
