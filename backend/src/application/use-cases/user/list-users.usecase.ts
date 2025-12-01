import { Inject, Injectable } from "@nestjs/common";
import { ListUsersOutput } from "src/application/dto/user.dto";
import { UserMapper } from "src/application/mappers/user.mapper";
import { IUserRepository, USER_REPOSITORY } from "src/domain/repositories/user.repository";


@Injectable()
export class ListUsersUseCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: IUserRepository
    ) { }

    async execute(): Promise<ListUsersOutput> {
        const users = await this.userRepository.findAll();

        return {
            items: users.map(UserMapper.toOutput),
            total: users.length,
        };
    }
}
