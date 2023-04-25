import { 
	Module,
	NestModule,
	MiddlewareConsumer, 
} from '@nestjs/common';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import { TemplateTemplateOptionHttpTcpController } from './template-template-option-http-tcp.controller';

@Module({
	imports: [ 
		TransportModule, 
	],
	controllers: [ TemplateTemplateOptionHttpTcpController ],
	providers: [ 
		TransportService, 
	],
})
export class TemplateTemplateOptionHttpTcpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
