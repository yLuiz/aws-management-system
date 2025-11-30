import { User } from "../entities/User";

export const USER_REPOSITORY = Symbol("USER_REPOSITORY");

export abstract class IUserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findAll(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  abstract update(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
}