import { UserMapper } from "src/application/mappers/user.mapper";
import { User } from "src/domain/entities/User";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { EmailVO } from "../../../domain/value-objects/email.vo";
import { PasswordVO } from "../../../domain/value-objects/password.vo";
import { CreateUserInput, UserOutputDto } from "../../dto/user.dto";

export class CreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(input: CreateUserInput): Promise<UserOutputDto> {
        // 1. Converter input → VOs → Entidade de Dominio
        const email = new EmailVO(input.email);
        const password = PasswordVO.create(input.password);

        const user = new User({
            name: input.name,
            email,
            password,
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await this.userRepository.save(user);
        return UserMapper.toOutput(user);
    }
}
