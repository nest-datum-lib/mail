import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { OptionOptionOption } from '@nest-datum/option';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from '../template/template.entity';

@Entity()
export class TemplateTemplateTemplateOption extends OptionOptionOption {
	@Column()
	public templateTemplateOptionId: string;

	@ManyToOne(() => TemplateTemplateOption, (templateTemplateOption) => templateTemplateOption.templateTemplateTemplateOptions, {
		onDelete: 'CASCADE'
	})
	public templateTemplateOption: TemplateTemplateOption;

	@Column()
	public templateId: string;

	@ManyToOne(() => Template, (template) => template.templateTemplateTemplateOptions)
	public template: Template;
}
