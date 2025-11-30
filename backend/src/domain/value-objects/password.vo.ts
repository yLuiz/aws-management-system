import { InvalidPasswordException } from "../exceptions/InvalidPasswordException";

export class PasswordVO {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(raw: string): PasswordVO {
    if (!raw || typeof raw !== "string") {
      throw new InvalidPasswordException("Password is required");
    }

    if (raw.length < 6) {
      throw new InvalidPasswordException("Must be at least 6 characters long");
    }

    return new PasswordVO(raw);
  }

  get value(): string {
    return this._value;
  }

  equals(other: PasswordVO): boolean {
    return this._value === other.value;
  }
}
