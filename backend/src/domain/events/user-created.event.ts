import { DomainEvent } from "./domain-event.interface";

export class UserCreatedEvent implements DomainEvent {
  readonly occurredAt = new Date();
  readonly eventName = "UserCreatedEvent";

  constructor(public readonly userId: string, public readonly email: string) {}
}
