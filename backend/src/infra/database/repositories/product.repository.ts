import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeORMProductEntity } from "../entities/type-orm-product.entity";
import { Repository } from "typeorm";
import { IProductRepository } from "src/domain/repositories/product.repository";
import { ProductOrmMapper } from "../mappers/product.orm.mapper";
import { Product } from "src/domain/entities/Product";

@Injectable()
export class ProductRepository implements IProductRepository {

    @InjectRepository(TypeORMProductEntity)
    private readonly _productRepository: Repository<TypeORMProductEntity>;

    async save(product: Product): Promise<void> {
        const ormEntity = ProductOrmMapper.toPersistence(product);
        await this._productRepository.save(ormEntity);
    }

    async findById(id: string): Promise<Product | null> {
        const product = await this._productRepository.findOne({ where: { id } });

        if (!product) return null;

        return ProductOrmMapper.toDomain(product);
    }

    async delete(id: string): Promise<void> {
        await this._productRepository.delete(id);
    }
}