import { User } from "src/domain/entities/User";
import { EmailVO } from "src/domain/value-objects/email.vo";
import { PasswordVO } from "src/domain/value-objects/password.vo";
import { CreateUserInput, UpdateUserInput, UserOutputDto } from "../dto/user.dto";

export class UserMapper {

    static toDomainCreate(dto: CreateUserInput): User {
        return new User({
            name: dto.name,
            email: new EmailVO(dto.email),
            password: PasswordVO.create(dto.password),
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    static toDomainUpdate(existing: User, dto: UpdateUserInput): User {
        // atualiza somente os campos enviados
        if (dto.name) existing.updateName(dto.name);
        if (dto.email) existing.updateEmail(new EmailVO(dto.email));
        if (dto.name) existing.updateName(dto.name);
        if (dto.password) existing.updatePassword(PasswordVO.create(dto.password));
        if (dto.active !== undefined) existing.updateStatus(dto.active);


        return existing;
    }

    static toOutput(user: User): UserOutputDto {
        return {
            id: user.id,
            name: user.name,
            email: user.email.value,
            active: user.active,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}
