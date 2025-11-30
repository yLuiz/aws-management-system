import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { productProviders } from "./providers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMProductEntity } from "src/infra/database/entities/type-orm-product.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TypeORMProductEntity
        ])
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ...productProviders
    ],
})
export class ProductModule { }