import { Inject, Injectable } from "@nestjs/common";
import { ProductOutputDto } from "src/application/dto/product.dto";
import { ProductMapper } from "src/application/mappers/product.mapper";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";

@Injectable()
export class ListProductsUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly _productRepository: IProductRepository
  ) {}

  async execute(): Promise<ProductOutputDto[] | null> {
    const products = await this._productRepository.findAll();

    if (!products) return null;

    return products.map(ProductMapper.toOutput);
  }
}