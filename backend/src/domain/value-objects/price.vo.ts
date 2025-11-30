import { InvalidPriceException } from "../exceptions/InvalidPriceException";

export class PriceVO {
  private readonly _value: number;

  constructor(value: number) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new InvalidPriceException("Price must be a valid number");
    }

    if (value < 0) {
      throw new InvalidPriceException("Price cannot be negative");
    }

    // Optional: normaliza casas decimais
    this._value = Number(value.toFixed(2));
  }

  get value(): number {
    return this._value;
  }

  add(amount: number): PriceVO {
    return new PriceVO(this._value + amount);
  }

  subtract(amount: number): PriceVO {
    const result = this._value - amount;
    if (result < 0) {
      throw new InvalidPriceException("Resulting price cannot be negative");
    }
    return new PriceVO(result);
  }

  equals(other: PriceVO): boolean {
    return this._value === other.value;
  }
}
