import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { ReportStatusHttpTcpController } from './report-status-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ ReportStatusHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class ReportStatusHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
