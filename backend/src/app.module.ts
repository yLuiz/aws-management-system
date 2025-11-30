import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    InfraModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
