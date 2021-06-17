import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  
  async getTemperature(city: string): Promise<any> {
    const params = {
      query: city,
      access_key: this.configService.get('api_key')
    };

    const { status, data } = await axios.get('http://api.weatherstack.com/current', { params });
    
    if (status === 200) {
      return { temp: data?.current?.temperature, msg: 'success' };
    }
    return { temp: 0, msg: 'failed' };
  }
}
