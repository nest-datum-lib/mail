import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { TemplateStatus } from '../template-status/template-status.entity';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class Template {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	public templateStatusId: string;

	@ManyToOne(() => TemplateStatus, (templateStatus) => templateStatus.templates)
	public templateStatus: TemplateStatus;

	@Column()
	public name: string;

	@Column({ default: '' })
	public description: string;

	@Column()
	public fromEmail: string;

	@Column()
	public fromName: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean;

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

	@OneToMany(() => TemplateTemplateOption, (templateTemplateOption) => templateTemplateOption.template)
	public templateTemplateOptions: TemplateTemplateOption[];

	@OneToMany(() => TemplateTemplateTemplateOption, (templateTemplateTemplateOption) => templateTemplateTemplateOption.template)
	public templateTemplateTemplateOptions: TemplateTemplateTemplateOption[];

	@OneToMany(() => Letter, (letter) => letter.template)
	public letters: Letter[];
}
