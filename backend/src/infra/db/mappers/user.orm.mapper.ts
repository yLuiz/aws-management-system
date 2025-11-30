import { User } from "src/domain/entities/User";
import { EmailVO } from "src/domain/value-objects/email.vo";
import { PasswordVO } from "src/domain/value-objects/password.vo";
import { TypeORMUserEntity } from "../entities/type-orm-user.entity";

export class UserOrmMapper {

  static toDomain(entity: TypeORMUserEntity): User {

    return new User(
      {
        name: entity.name,
        email: new EmailVO(entity.email),
        password: PasswordVO.create(entity.password_hash),
        active: entity.active,
        createdAt: entity.created_at,
        updatedAt: entity.updated_at,
      },
      entity.id,
    );
  }

  static toPersistence(user: User): TypeORMUserEntity {
    const orm = new TypeORMUserEntity();

    orm.id = user.id;
    orm.name = user.name;
    orm.email = user.email.value;
    orm.password_hash = user.password.value;
    orm.active = user.active;
    orm.created_at = user.createdAt;
    orm.updated_at = user.updatedAt;

    return orm;
  }
}
