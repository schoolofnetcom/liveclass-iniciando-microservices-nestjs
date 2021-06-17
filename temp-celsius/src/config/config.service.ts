export class ConfigService {
    private readonly envConfig: { [key: string]: any } = null;

    constructor() {
        this.envConfig = {
            port: 9001,
            host: '0.0.0.0',
            api_key: '7e97756683dbdc169d48f60fe4169aa3'
        };
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}