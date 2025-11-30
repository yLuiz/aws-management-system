import { Product } from "../entities/Product";

export const PRODUCT_REPOSITORY = Symbol("PRODUCT_REPOSITORY");

export abstract class IProductRepository {
  abstract findById(id: string): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
}