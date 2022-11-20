import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
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
	public userId: string;

	@Column({ default: '' })
	public letterStatusId: string;

	@ManyToOne(() => LetterStatus, (letterStatus) => letterStatus.letters)
	public letterStatus: LetterStatus;

	@Column({ default: '' })
	public templateId: string;

	@ManyToOne(() => Template, (template) => template.letters)
	public template: Template;

	@Column()
	public name: string;

	@Column({ default: '' })
	public description: string;

	@Column()
	public subject: string;

	@Column()
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

	@OneToMany(() => LetterLetterOption, (letterLetterOption) => letterLetterOption.letter)
	public letterLetterOptions: LetterLetterOption[];

	@OneToMany(() => LetterLetterLetterOption, (letterLetterLetterOption) => letterLetterLetterOption.letter)
	public letterLetterLetterOptions: LetterLetterLetterOption[];
}
