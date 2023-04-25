import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { LetterHttpTcpController } from './letter-http-tcp.controller';

@Module({
	controllers: [ LetterHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class LetterHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
