import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';

@Entity()
export class TemplateOption extends Option {
	@OneToMany(() => TemplateTemplateOption, (templateTemplateOption) => templateTemplateOption.templateOption, {
		cascade: true,
	})
	public templateTemplateOptions: TemplateTemplateOption[];
}
