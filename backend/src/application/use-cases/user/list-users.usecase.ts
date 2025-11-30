import { ListUsersOutput } from "src/application/dto/user.dto";
import { UserMapper } from "src/application/mappers/user.mapper";
import { IUserRepository } from "src/domain/repositories/user.repository";


export class ListUsersUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(): Promise<ListUsersOutput> {
        const users = await this.userRepository.findAll();

        return {
            items: users.map(UserMapper.toOutput),
            total: users.length,
        };
    }
}
