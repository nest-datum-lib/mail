import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LetterLetterLetterOption } from '../letter-letter-letter-option/letter-letter-letter-option.entity';
import { LetterOption } from '../letter-option/letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ 
			LetterLetterLetterOption,
			LetterOption,
			Letter, 
		]),
	],
})
export class LetterLetterOptionModule {
}

