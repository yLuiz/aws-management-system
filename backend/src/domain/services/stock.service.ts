export class StockDomainService {
  ensureStockAvailable(current: number, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be positive");
    }

    if (quantity > current) {
      throw new Error(
        `Insufficient stock: requested ${quantity}, available ${current}`
      );
    }
  }
}
