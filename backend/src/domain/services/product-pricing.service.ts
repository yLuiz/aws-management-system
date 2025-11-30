import { PriceVO } from "../value-objects/price.vo";


export class ProductPricingService {
  applyDiscount(price: PriceVO, percentage: number): PriceVO {
    if (percentage <= 0 || percentage >= 100) {
      throw new Error("Invalid discount percentage");
    }

    const newValue = price.value - (price.value * percentage) / 100;
    return new PriceVO(newValue);
  }
}
