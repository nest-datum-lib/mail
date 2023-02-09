import { Test, TestingModule } from '@nestjs/testing';
import { TemplateTemplateOptionService } from './template-template-option.service';

describe('TemplateTemplateOptionService', () => {
	let service: TemplateTemplateOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			Templates: [TemplateTemplateOptionService],
		}).compile();

		service = module.get<TemplateTemplateOptionService>(TemplateTemplateOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
