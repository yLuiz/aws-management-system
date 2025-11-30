import { Product } from "src/domain/entities/Product";
import { PriceVO } from "src/domain/value-objects/price.vo";
import { CreateProductInput, ProductOutputDto, UpdateProductInput } from "../dto/product.dto";

export class ProductMapper {

    static toDomainCreate(dto: CreateProductInput): Product {
        return new Product({
            name: dto.name,
            description: dto.description,
            price: new PriceVO(dto.price),
            stock: dto.stock,
            active: true,
        });
    }

    static toDomainUpdate(existing: Product, dto: UpdateProductInput): Product {
        // atualiza somente os campos enviados
        if (dto.name) existing.updateName(dto.name);
        if (dto.description) existing.updateDescription(dto.description);
        if (dto.price !== undefined) {
            existing.updatePrice(new PriceVO(dto.price));
        }
        if (dto.stock !== undefined) {
            if (dto.stock < existing.stock) {
                existing.decreaseStock(existing.stock - dto.stock);
            } else {
                existing.increaseStock(dto.stock - existing.stock);
            }
        }

        return existing;
    }

    static toOutput(product: Product): ProductOutputDto {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price.value,
            stock: product.stock,
            active: product.active,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
    }
}
