import { DomainEvent } from "./domain-event.interface";

export class ProductPriceUpdatedEvent implements DomainEvent {
  readonly occurredAt = new Date();
  readonly eventName = "ProductPriceUpdatedEvent";

  constructor(
    public readonly productId: string,
    public readonly oldPrice: number,
    public readonly newPrice: number
  ) {}
}
