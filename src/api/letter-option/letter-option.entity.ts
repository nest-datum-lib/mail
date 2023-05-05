import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option } from '@nest-datum/option';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';

@Entity()
export class LetterOption extends Option {
	@OneToMany(() => LetterLetterOption, (letterLetterOption) => letterLetterOption.letterOption, {
		cascade: true,
	})
	public letterLetterOptions: LetterLetterOption[];
}
