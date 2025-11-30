import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envConfig } from './config/envConfig';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const HOST = envConfig().HOST;
  const PORT = envConfig().PORT;
  await app.listen(PORT, HOST);


  console.log('\n');
  logger.debug(`🚀🚀🚀 Application is running on: http://${HOST}:${PORT} 🚀🚀🚀`);
  console.log('\n');

}
bootstrap();
