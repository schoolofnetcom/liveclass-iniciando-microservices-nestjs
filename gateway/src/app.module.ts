import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ConfigService } from './config/config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    ConfigService,
    {
      provide: 'CELSIUS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const celsiusServiceOpts = configService.get('celsiusService');
        return ClientProxyFactory.create(celsiusServiceOpts);
      },
      inject: [ConfigService]
    }
  ],
})
export class AppModule {}
