import { Provider } from "@nestjs/common";
import { CreateUserUseCase } from "src/application/use-cases/user/create-user.usecase";
import { DeleteUserUseCase } from "src/application/use-cases/user/delete-user.usecase";
import { GetUserByIdUseCase } from "src/application/use-cases/user/get-user-by-id.usecase";
import { ListUsersUseCase } from "src/application/use-cases/user/list-users.usecase";
import { UpdateUserUseCase } from "src/application/use-cases/user/update-user.usecase";
import { USER_REPOSITORY } from "src/domain/repositories/user.repository";
import { UserRepository } from "src/infra/database/repositories/user.repository";

export const userProviders: Provider[] = [
    {
        provide: USER_REPOSITORY,
        useClass: UserRepository,
    },
    CreateUserUseCase,
    GetUserByIdUseCase,
    ListUsersUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
];
