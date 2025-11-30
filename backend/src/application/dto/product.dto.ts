// INPUT DTO (Use Case recebe isso)
export interface CreateProductInput {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
}

// INPUT para Atualizar
export interface UpdateProductInput {
    name?: string;
    description?: string | null;
    price?: number;
    stock?: number;
    active?: boolean;
}

// OUTPUT DTO (Use Case devolve isso)
export interface ProductOutputDto {
    id: string;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// LISTAGEM
export interface ListProductsOutput {
    items: ProductOutputDto[];
    total: number;
}
