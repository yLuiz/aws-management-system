import { UserMapper } from "src/application/mappers/user.mapper";
import { IUserRepository, USER_REPOSITORY } from "src/domain/repositories/user.repository";
import { UserOutputDto } from "../../dto/user.dto";
import { Inject, Injectable } from "@nestjs/common";
import { UserNotFoundException } from "src/application/exceptions/UserNotFoundException";

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) { }

  async execute(id: string): Promise<UserOutputDto | null> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new UserNotFoundException();

    return UserMapper.toOutput(user);
  }
}
