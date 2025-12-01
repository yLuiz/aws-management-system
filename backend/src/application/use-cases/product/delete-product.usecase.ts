import { Inject, Injectable } from "@nestjs/common";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";

@Injectable()
export class DeleteProductUseCase {
    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly _productRepository: IProductRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this._productRepository.delete(id);
    }
}