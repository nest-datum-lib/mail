import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option as NestDatumOption } from '@nest-datum/option';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';

@Entity()
export class TemplateOption extends NestDatumOption {
	@OneToMany(() => TemplateTemplateOption, (templateTemplateOption) => templateTemplateOption.templateOption)
	public templateTemplateOptions: TemplateTemplateOption[];
}
