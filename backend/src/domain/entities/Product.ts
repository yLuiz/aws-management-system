import { InvalidPriceException } from "../exceptions/InvalidPriceException";
import { PriceVO } from "../value-objects/price.vo";


export interface IProductProps {
  name: string;
  description?: string | null;
  price: PriceVO;
  stock: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product {
  private readonly _id: string;
  private _props: IProductProps;

  constructor(props: IProductProps, id?: string) {
    this.validate(props);

    this._id = id ?? crypto.randomUUID();
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  // GETTERS
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._props.name;
  }

  get description(): string | null | undefined {
    return this._props.description;
  }

  get price(): PriceVO {
    return this._props.price;
  }

  get stock(): number {
    return this._props.stock;
  }

  get active(): boolean {
    return this._props.active;
  }

  get createdAt(): Date {
    return this._props.createdAt!;
  }

  get updatedAt(): Date {
    return this._props.updatedAt!;
  }

  // VALIDATION
  private validate(props: IProductProps): void {
    if (!props.name || props.name.trim().length === 0) {
      throw new Error("Product name is required");
    }

    if (props.stock < 0) {
      throw new Error("Stock cannot be negative");
    }

    if (!(props.price instanceof PriceVO)) {
      throw new InvalidPriceException("Price must be a valid 'PriceVO' instance");
    }
  }

  // BEHAVIOR (DDD)
  updateName(newName: string): void {
    if (!newName || newName.trim().length === 0) {
      throw new Error("Product name cannot be empty");
    }

    this._props.name = newName;
    this.touch();
  }

  updateDescription(newDescription: string): void {
    this._props.description = newDescription;
    this.touch();
  }

  updatePrice(newPrice: PriceVO): void {
    this._props.price = newPrice;
    this.touch();
  }

  increaseStock(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    this._props.stock += amount;
    this.touch();
  }

  decreaseStock(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");

    if (amount > this._props.stock) {
      throw new Error(
        `Insufficient stock: requested ${amount}, available ${this._props.stock}`,
      );
    }

    this._props.stock -= amount;
    this.touch();
  }

  activate(): void {
    this._props.active = true;
    this.touch();
  }

  deactivate(): void {
    this._props.active = false;
    this.touch();
  }
  
  // INTERNAL UPDATE
  private touch(): void {
    this._props.updatedAt = new Date();
  }
}
