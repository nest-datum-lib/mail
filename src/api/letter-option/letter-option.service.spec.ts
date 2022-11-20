import { Test, TestingModule } from '@nestjs/testing';
import { LetterOptionService } from './letter-option.service';

describe('LetterOptionService', () => {
	let service: LetterOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LetterOptionService],
		}).compile();

		service = module.get<LetterOptionService>(LetterOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
