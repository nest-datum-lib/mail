import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LetterLetterOption } from '../letter-letter-option/letter-letter-option.entity';
import { Letter } from '../letter/letter.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ LetterLetterOption ]),
		TypeOrmModule.forFeature([ Letter ]),
	],
})
export class LetterLetterLetterOptionModule {
}

