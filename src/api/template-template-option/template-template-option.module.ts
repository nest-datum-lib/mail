import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { Template } from '../template/template.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateTemplateTemplateOption,
			TemplateOption, 
			Template,
		]),
	],
})
export class TemplateTemplateOptionModule {
}

