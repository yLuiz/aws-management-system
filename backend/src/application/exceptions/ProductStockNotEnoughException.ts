export class ProductStockNotEnoughException extends Error {
    constructor(message: string = "Product stock is not enough") {
        super(message);
        this.name = "ProductStockNotEnoughException";
    }
}