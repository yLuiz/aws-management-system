import { Module } from "@nestjs/common";
import { userProviders } from "./providers";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMUserEntity } from "src/infra/database/entities/type-orm-user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TypeORMUserEntity
        ])
    ],
    controllers: [
        UserController
    ],
    providers: [
        ...userProviders
    ],
})
export class UserModule {}