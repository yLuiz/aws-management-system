export class ProductNotFountException extends Error {
    constructor(message: string = 'Product not found') {
        super(message);
        this.name = "ProductNotFountException";
    }
}