import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Template } from '../template/template.entity';

@Entity()
export class TemplateTemplateTemplateOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public parentId: string;

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

	@Column('text')
	public content: string;

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
}
