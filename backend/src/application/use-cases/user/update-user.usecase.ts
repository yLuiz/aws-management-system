import { UpdateUserInput, UserOutputDto } from "../../dto/user.dto";
import { EmailVO } from "../../../domain/value-objects/email.vo";
import { PasswordVO } from "../../../domain/value-objects/password.vo";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { UserMapper } from "src/application/mappers/user.mapper";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(id: string, input: UpdateUserInput): Promise<UserOutputDto> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        if (input.email) user.updateEmail(new EmailVO(input.email));
        if (input.name) user.updateName(input.name);
        if (input.password) user.updatePassword(PasswordVO.create(input.password));
        if (input.active !== undefined) user.updateStatus(input.active);

        await this.userRepository.update(user);

        return UserMapper.toOutput(user);
    }
}
