import { Test, TestingModule } from '@nestjs/testing';
import { TemplateStatusService } from './template-status.service';

describe('TemplateStatusService', () => {
	let service: TemplateStatusService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TemplateStatusService],
		}).compile();

		service = module.get<TemplateStatusService>(TemplateStatusService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
