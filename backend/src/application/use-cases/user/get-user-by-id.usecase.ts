import { UserMapper } from "src/application/mappers/user.mapper";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { UserOutputDto } from "../../dto/user.dto";

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<UserOutputDto | null> {
    const user = await this.userRepository.findById(id);

    if (!user) return null;

    return UserMapper.toOutput(user);
  }
}
