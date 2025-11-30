import { Product } from "../entities/Product";

export const PRODUCT_REPOSITORY = Symbol("PRODUCT_REPOSITORY");

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}