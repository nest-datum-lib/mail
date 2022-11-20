import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateOption } from '../template-option/template-option.entity';
import { Template } from '../template/template.entity';

@Entity()
export class TemplateTemplateOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public templateOptionId: string;

	@ManyToOne(() => TemplateOption, (templateOption) => templateOption.templateTemplateOptions)
	public templateOption: TemplateOption;

	@Column()
	public templateId: string;

	@ManyToOne(() => Template, (template) => template.templateTemplateOptions)
	public template: Template;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;

	@OneToMany(() => TemplateTemplateTemplateOption, (templateTemplateTemplateOption) => templateTemplateTemplateOption.templateTemplateOption)
	public templateTemplateTemplateOptions: TemplateTemplateTemplateOption[];
}
