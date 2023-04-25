import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TemplateHttpTcpController } from './template-http-tcp.controller';

@Module({
	controllers: [ TemplateHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService, 
	],
})
export class TemplateHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
