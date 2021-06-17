import { Transport } from "@nestjs/microservices";

export class ConfigService {
    private readonly envConfig: { [key: string]: any } = null;

    constructor() {
        this.envConfig = {
            port: 9000
        };
        this.envConfig.celsiusService = {
            options: {
                port: 9001,
                host: '127.0.0.1'
            },
            transport: Transport.TCP
        }
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}