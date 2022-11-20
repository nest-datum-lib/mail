import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class LetterLetterLetterOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public parentId: string;

	@Column()
	public letterLetterOptionId: string;

	@ManyToOne(() => LetterLetterOption, (letterLetterOption) => letterLetterOption.letterLetterLetterOptions, {
		onDelete: 'CASCADE'
	})
	public letterLetterOption: LetterLetterOption;

	@Column()
	public letterId: string;

	@ManyToOne(() => Letter, (letter) => letter.letterLetterLetterOptions)
	public letter: Letter;

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
