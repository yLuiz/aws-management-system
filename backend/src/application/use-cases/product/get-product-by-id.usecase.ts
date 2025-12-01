import { Inject, Injectable } from "@nestjs/common";
import { ProductOutputDto } from "src/application/dto/product.dto";
import { ProductNotFountException } from "src/application/exceptions/ProductNotFountException";
import { ProductMapper } from "src/application/mappers/product.mapper";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";

@Injectable()
export class GetProductByIdUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly _productRepository: IProductRepository
  ) {}

  async execute(id: string): Promise<ProductOutputDto | null> {
    const product = await this._productRepository.findById(id);

    if (!product) throw new ProductNotFountException();

    return ProductMapper.toOutput(product);
  }
}