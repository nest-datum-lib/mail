import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from '../template/template.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ 
			TemplateTemplateOption,
			Template, 
		]),
	],
})
export class TemplateTemplateTemplateOptionModule {
}

