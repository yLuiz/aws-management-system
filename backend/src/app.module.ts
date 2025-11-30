import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [
    InfraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
