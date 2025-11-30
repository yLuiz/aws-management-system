import * as dotenv from 'dotenv';

dotenv.config();

export function envConfig() {
    return {
        HOST: process.env.HOST || '127.0.0.1',
        PORT: Number(process.env.PORT) || 3000,
        DATABASE: {
            HOST: process.env.DB_HOST || 'localhost',
            PORT: Number(process.env.DB_PORT) || 5432,
            USERNAME: process.env.DB_USER || 'user',
            PASSWORD: process.env.DB_PASSWORD || 'password',
            NAME: process.env.DB_NAME || 'app_db',
        },
        JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
        AMAZON_S3: {
            ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
            SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
            BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME || '',
            REGION: process.env.AWS_REGION || 'us-east-1',
        },
        AMAZON_RDS: {
            HOST: process.env.RDS_HOST || '',
            PORT: Number(process.env.RDS_PORT) || undefined,
            USERNAME: process.env.RDS_USERNAME || '',
            PASSWORD: process.env.RDS_PASSWORD || '',
            DB_NAME: process.env.RDS_DB_NAME || '',
        }


    }
}