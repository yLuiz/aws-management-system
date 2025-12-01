import { Inject, Injectable } from "@nestjs/common";
import { UpdateProductInput } from "src/application/dto/product.dto";
import { ProductNotFountException } from "src/application/exceptions/ProductNotFountException";
import { ProductMapper } from "src/application/mappers/product.mapper";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";

@Injectable()
export class UpdateProductUseCase {

    constructor(
        @Inject(PRODUCT_REPOSITORY)
        private readonly _productRepository: IProductRepository
    ) { }

    async execute(id: string, dto: UpdateProductInput): Promise<void> {
        const product = await this._productRepository.findById(id);

        if (!product) throw new ProductNotFountException();

        const parseProduct = ProductMapper.toDomainUpdate(product, dto);
        await this._productRepository.update(parseProduct);
    }
}