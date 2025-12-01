import { Inject, Injectable } from "@nestjs/common";
import { UserNotFoundException } from "src/application/exceptions/UserNotFoundException";
import { IUserRepository, USER_REPOSITORY } from "src/domain/repositories/user.repository";

@Injectable()
export class DeleteUserUseCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly _userRepository: IUserRepository
    ) { }

    async execute(id: string): Promise<void> {

        const user = await this._userRepository.findById(id);
        if (!user) throw new UserNotFoundException();

        await this._userRepository.delete(id);
    }

}