import { Test, TestingModule } from '@nestjs/testing';
import { TemplateOptionService } from './template-option.service';

describe('TemplateOptionService', () => {
	let service: TemplateOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TemplateOptionService],
		}).compile();

		service = module.get<TemplateOptionService>(TemplateOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
