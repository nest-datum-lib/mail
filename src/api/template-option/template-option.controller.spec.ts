import { Test, TestingModule } from '@nestjs/testing';
import { TemplateOptionController } from './template-option.controller';

describe('TemplateOptionController', () => {
	let controller: TemplateOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TemplateOptionController],
		}).compile();

		controller = module.get<TemplateOptionController>(TemplateOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
