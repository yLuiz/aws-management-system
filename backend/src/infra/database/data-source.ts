import { registerAs } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from '../../config/envConfig';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';

export const config: TypeOrmModule = {
    type: 'postgres',

    // DB CONNECTION (LOCAL OR RDS)
    host: envConfig().AMAZON_RDS.HOST || envConfig().DATABASE.HOST || 'localhost',
    port: Number(envConfig().AMAZON_RDS.PORT || envConfig().DATABASE.PORT || 5432),
    username: envConfig().AMAZON_RDS.USERNAME || envConfig().DATABASE.USERNAME || 'user',
    password: envConfig().AMAZON_RDS.PASSWORD || envConfig().DATABASE.PASSWORD || 'password',
    database: envConfig().AMAZON_RDS.DB_NAME || envConfig().DATABASE.NAME || 'app_db',

    // ENTITIES (ORM + MIGRATIONS)
    entities: [__dirname + '/entities/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    seeds: [__dirname + '/seeds/*.{ts,js}'],

    // RECOMMENDED OPTIONS
    synchronize: false, // não usar synchronize em produção
    logging: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
