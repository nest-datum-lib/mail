import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { LetterLetterOptionHttpTcpController } from './letter-letter-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ LetterLetterOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class LetterLetterOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
