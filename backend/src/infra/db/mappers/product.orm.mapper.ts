import { Product } from "src/domain/entities/Product";
import { PriceVO } from "src/domain/value-objects/price.vo";
import { TypeORMProductEntity } from "../entities/type-orm-product.entity";


export class ProductOrmMapper {

    static toDomain(entity: TypeORMProductEntity): Product | null {
        if (!entity) return null;

        return new Product(
            {
                name: entity.name,
                description: entity.description,
                price: new PriceVO(entity.price),
                stock: entity.stock,
                active: entity.active,
                createdAt: entity.created_at,
                updatedAt: entity.updated_at,
            },
            entity.id,
        );
    }

    static toPersistence(domain: Product): TypeORMProductEntity {
        const ormEntity = new TypeORMProductEntity();

        ormEntity.id = domain.id;
        ormEntity.name = domain.name;
        ormEntity.description = domain.description;
        ormEntity.price = domain.price.value; // VO → number
        ormEntity.stock = domain.stock;
        ormEntity.active = domain.active;
        ormEntity.created_at = domain.createdAt;
        ormEntity.updated_at = domain.updatedAt;

        return ormEntity;
    }
}
