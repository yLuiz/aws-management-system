import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envConfig } from './config/envConfig';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Management API')
    .setDescription('This API was created with purpose of managing simple entities.')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);



  const HOST = envConfig().HOST;
  const PORT = envConfig().PORT;
  await app.listen(PORT, HOST);


  console.log('\n');
  logger.debug(`🚀🚀🚀 Application is running on: http://${HOST}:${PORT} 🚀🚀🚀`);
  logger.debug(`📝📝📝 Swagger is running on: http://${HOST}:${PORT}/api 📝📝📝`);
  console.log('\n');

}
bootstrap();
