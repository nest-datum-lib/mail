import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option as NestDatumOption } from '@nest-datum/option';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';

@Entity()
export class LetterOption extends NestDatumOption {
	@OneToMany(() => LetterLetterOption, (letterLetterOption) => letterLetterOption.letterOption)
	public letterLetterOptions: LetterLetterOption[];
}
