import { Provider } from "@nestjs/common";
import { CreateProductUseCase } from "src/application/use-cases/product/create-product.usecase";
import { DeleteProductUseCase } from "src/application/use-cases/product/delete-product.usecase";
import { GetProductByIdUseCase } from "src/application/use-cases/product/get-product-by-id.usecase";
import { ListProductsUseCase } from "src/application/use-cases/product/list-products.usecase";
import { UpdateProductUseCase } from "src/application/use-cases/product/update-product.usecase";
import { PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";
import { ProductRepository } from "src/infra/database/repositories/product.repository";

export const productProviders: Provider[] = [
    {
        provide: PRODUCT_REPOSITORY,
        useClass: ProductRepository,
    },
    CreateProductUseCase,
    GetProductByIdUseCase,
    ListProductsUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
];