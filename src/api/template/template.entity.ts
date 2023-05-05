import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { TemplateTemplateTemplateOption } from '../template-template-template-option/template-template-template-option.entity';
import { TemplateTemplateOption } from '../template-template-option/template-template-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class Template {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public envKey: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public templateStatusId: string;

	@Column()
	@Index({ unique: true })
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@Column()
	public fromEmail: string;

	@Column()
	public fromName: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean = false;

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

	@OneToMany(() => TemplateTemplateOption, (templateTemplateOption) => templateTemplateOption.template, {
		cascade: true,
	})
	public templateTemplateOptions: TemplateTemplateOption[];

	@OneToMany(() => TemplateTemplateTemplateOption, (templateTemplateTemplateOption) => templateTemplateTemplateOption.template, {
		cascade: true,
	})
	public templateTemplateTemplateOptions: TemplateTemplateTemplateOption[];

	@OneToMany(() => Letter, (letter) => letter.template, {
		cascade: true,
	})
	public letters: Letter[];
}
