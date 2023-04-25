import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TemplateOptionHttpTcpController } from './template-option-http-tcp.controller';

@Module({
	controllers: [ TemplateOptionHttpTcpController ],
	imports: [
		TransportModule,
	],
	providers: [ 
		TransportService,
	],
})
export class TemplateOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
