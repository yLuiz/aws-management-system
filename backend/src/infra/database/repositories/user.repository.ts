import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/User";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { Repository } from "typeorm";
import { TypeORMUserEntity } from "../entities/type-orm-user.entity";
import { UserOrmMapper } from "../mappers/user.orm.mapper";

@Injectable()
export class UserRepository implements IUserRepository {

    @InjectRepository(TypeORMUserEntity)
    private readonly _userRepository: Repository<TypeORMUserEntity>;

    async findById(id: string): Promise<User | null> {
        const user = await this._userRepository.findOne({ where: { id } });
        if (!user) return null;

        return UserOrmMapper.toDomain(user);
    }

    async findAll(): Promise<User[]> {
        const users = await this._userRepository.find();
        return users.map(user => UserOrmMapper.toDomain(user));
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this._userRepository.findOne({ where: { email } });
        if (!user) return null;

        return UserOrmMapper.toDomain(user);
    }

    async save(user: User): Promise<void> {
        const ormEntity = UserOrmMapper.toPersistence(user);
        await this._userRepository.save(ormEntity);
    }

    async update(user: User): Promise<void> {
        const ormEntity = UserOrmMapper.toPersistence(user);
        await this._userRepository.update(ormEntity.id, ormEntity);
    }

    async delete(id: string): Promise<void> {
        await this._userRepository.delete(id);
    }

}