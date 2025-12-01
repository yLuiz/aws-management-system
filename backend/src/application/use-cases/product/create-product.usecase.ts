import { CreateProductInput, ProductOutputDto } from "../../dto/product.dto";

import { PriceVO } from "../../../domain/value-objects/price.vo";
import { ProductMapper } from "../../mappers/product.mapper";
import { IProductRepository, PRODUCT_REPOSITORY } from "src/domain/repositories/product.repository";
import { Product } from "src/domain/entities/Product";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly _productRepository: IProductRepository
  ) { }

  async execute(input: CreateProductInput): Promise<ProductOutputDto> {
    const price = new PriceVO(input.price);

    const product = new Product({
      name: input.name,
      description: input.description,
      price,
      stock: input.stock,
      active: true,
    });

    await this._productRepository.save(product);

    return ProductMapper.toOutput(product);
  }
}
