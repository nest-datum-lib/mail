import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
	Index,
} from 'typeorm';
import { LetterStatus } from '../letter-status/letter-status.entity';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Template } from '../template/template.entity';

@Entity()
export class Letter {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public envKey: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	@Index()
	public letterStatusId: string;

	@Column({ default: '' })
	public templateId: string;

	@ManyToOne(() => Template, (template) => template.letters, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	public template: Template;

	@Column()
	@Index()
	public name: string;

	@Column({ default: '' })
	public description: string;

	@Column()
	@Index()
	public subject: string;

	@Column()
	@Index()
	public textPart: string;

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

	@OneToMany(() => LetterLetterOption, (letterLetterOption) => letterLetterOption.letter, {
		cascade: true,
	})
	public letterLetterOptions: LetterLetterOption[];

	@OneToMany(() => LetterLetterLetterOption, (letterLetterLetterOption) => letterLetterLetterOption.letter, {
		cascade: true,
	})
	public letterLetterLetterOptions: LetterLetterLetterOption[];
}
