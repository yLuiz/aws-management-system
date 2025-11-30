import { Provider } from "@nestjs/common";
import { CreateUserUseCase } from "src/application/use-cases/user/create-user.usecase";
import { GetUserByIdUseCase } from "src/application/use-cases/user/get-user-by-id.usecase";
import { USER_REPOSITORY } from "src/domain/repositories/user.repository";
import { UserRepository } from "src/infra/database/repositories/user.repository";

export const userProviders: Provider[] = [
    {
        provide: USER_REPOSITORY,
        useClass: UserRepository,
    },
    CreateUserUseCase,
    GetUserByIdUseCase,
];