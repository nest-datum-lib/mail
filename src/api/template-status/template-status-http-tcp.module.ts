import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TemplateStatusHttpTcpController } from './template-status-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ TemplateStatusHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class TemplateStatusHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
