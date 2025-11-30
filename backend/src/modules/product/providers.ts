import { Provider } from "@nestjs/common";
import { CreateProductUseCase } from "src/application/use-cases/product/create-product.usecase";
import { PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";
import { ProductRepository } from "src/infra/database/repositories/product.repository";

export const productProviders: Provider[] = [
    {
        provide: PRODUCT_REPOSITORY,
        useClass: ProductRepository,
    },
    CreateProductUseCase
];