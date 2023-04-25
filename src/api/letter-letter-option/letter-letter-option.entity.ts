import { 
	Entity,
	Column, 
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { Bind } from '@nest-datum/bind';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class LetterLetterOption extends Bind {
	@Column()
	public letterOptionId: string;

	@ManyToOne(() => LetterOption, (letterOption) => letterOption.letterLetterOptions)
	public letterOption: LetterOption;

	@Column()
	public letterId: string;

	@ManyToOne(() => Letter, (letter) => letter.letterLetterOptions)
	public letter: Letter;

	@OneToMany(() => LetterLetterLetterOption, (letterLetterLetterOption) => letterLetterLetterOption.letterLetterOption)
	public letterLetterLetterOptions: LetterLetterLetterOption[];
}
