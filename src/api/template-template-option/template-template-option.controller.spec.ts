import { Test, TestingModule } from '@nestjs/testing';
import { TemplateTemplateOptionController } from './template-template-option.controller';

describe('TemplateTemplateOptionController', () => {
	let controller: TemplateTemplateOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TemplateTemplateOptionController],
		}).compile();

		controller = module.get<TemplateTemplateOptionController>(TemplateTemplateOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
