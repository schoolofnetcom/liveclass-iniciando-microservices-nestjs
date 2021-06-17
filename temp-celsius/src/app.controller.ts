import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ICelsius } from './interfaces/icelsius.interface';

@Controller('celsius')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('GET_TEMP_CELSIUS')
  getAPI({ city }: ICelsius): Promise<any> {
    return this.appService.getTemperature(city);
  }
}
