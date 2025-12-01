import { UpdateUserInput, UserOutputDto } from "../../dto/user.dto";
import { EmailVO } from "../../../domain/value-objects/email.vo";
import { PasswordVO } from "../../../domain/value-objects/password.vo";
import { IUserRepository, USER_REPOSITORY } from "src/domain/repositories/user.repository";
import { UserMapper } from "src/application/mappers/user.mapper";
import { Inject, Injectable } from "@nestjs/common";
import { UserNotFoundException } from "src/application/exceptions/UserNotFoundException";

@Injectable()
export class UpdateUserUseCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository
    ) { }

    async execute(id: string, input: UpdateUserInput): Promise<UserOutputDto> {
        const user = await this.userRepository.findById(id);

        if (!user) throw new UserNotFoundException();
        const parseUser = UserMapper.toDomainUpdate(user, input);

        await this.userRepository.update(parseUser);

        return UserMapper.toOutput(parseUser);
    }
}
