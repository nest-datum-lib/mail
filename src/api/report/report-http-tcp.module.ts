import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { ReportHttpTcpController } from './report-http-tcp.controller';

@Module({
	controllers: [ ReportHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class ReportHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
