export class InsufficientStockException extends Error {
  constructor(requested: number, available: number) {
    super(`Insufficient stock. Requested: ${requested}, Available: ${available}`);
    this.name = "InsufficientStockException";
  }
}
