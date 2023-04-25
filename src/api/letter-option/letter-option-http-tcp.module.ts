import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { LetterOptionHttpTcpController } from './letter-option-http-tcp.controller';

@Module({
	controllers: [ LetterOptionHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService,
	],
})
export class LetterOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
