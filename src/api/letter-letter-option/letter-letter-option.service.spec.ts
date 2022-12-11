import { Test, TestingModule } from '@nestjs/testing';
import { LetterLetterOptionService } from './letter-letter-option.service';

describe('LetterLetterOptionService', () => {
	let service: LetterLetterOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LetterLetterOptionService],
		}).compile();

		service = module.get<LetterLetterOptionService>(LetterLetterOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
