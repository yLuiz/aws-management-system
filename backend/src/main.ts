import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);


  console.log('\n');
  logger.debug(`🚀🚀🚀 Application is running on: http://localhost:${PORT} 🚀🚀🚀`);
  console.log('\n');

}
bootstrap();
