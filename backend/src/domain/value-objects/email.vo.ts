import { InvalidEmailException } from "../exceptions/InvalidEmailException";


export class EmailVO {
  private readonly _value: string;

  constructor(value: string) {
    if (!value || typeof value !== "string") {
      throw new InvalidEmailException("Email is required");
    }

    const normalized = value.trim().toLowerCase();

    if (!this.isValid(normalized)) {
      throw new InvalidEmailException(normalized);
    }

    this._value = normalized;
  }

  private isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  get value(): string {
    return this._value;
  }

  equals(other: EmailVO): boolean {
    return this._value === other.value;
  }
}
