import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { LetterStatusHttpTcpController } from './letter-status-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ LetterStatusHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class LetterStatusHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
