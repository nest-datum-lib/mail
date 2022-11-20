import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class LetterLetterOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public letterOptionId: string;

	@ManyToOne(() => LetterOption, (letterOption) => letterOption.letterLetterOptions)
	public letterOption: LetterOption;

	@Column()
	public letterId: string;

	@ManyToOne(() => Letter, (letter) => letter.letterLetterOptions)
	public letter: Letter;

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

	@OneToMany(() => LetterLetterLetterOption, (letterLetterLetterOption) => letterLetterLetterOption.letterLetterOption)
	public letterLetterLetterOptions: LetterLetterLetterOption[];
}
