import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { OptionOptionOption as NestDatumOptionOptionOption } from '@nest-datum/option';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Entity()
export class LetterLetterLetterOption extends NestDatumOptionOptionOption {
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
}
