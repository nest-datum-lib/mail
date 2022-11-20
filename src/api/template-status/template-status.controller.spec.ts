import { Test, TestingModule } from '@nestjs/testing';
import { TemplateStatusController } from './template-status.controller';

describe('TemplateStatusController', () => {
	let controller: TemplateStatusController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TemplateStatusController],
		}).compile();

		controller = module.get<TemplateStatusController>(TemplateStatusController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
