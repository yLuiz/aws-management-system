import { User } from 'src/domain/entities/User';
import { EmailVO } from 'src/domain/value-objects/email.vo';
import { PasswordVO } from 'src/domain/value-objects/password.vo';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UserOrmMapper } from '../mappers/user.orm.mapper';

export class User1764536299945 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository('users');

        const user = [
            new User({
                name: 'Admin User',
                email: new EmailVO('admin@example.com'),
                password: PasswordVO.create('admin@123'),
                active: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }),
            new User({
                name: 'Regular User',
                email: new EmailVO('regular@example.com'),
                password: PasswordVO.create('regular@123'),
                active: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }),
        ]

        await repository.insert(user.map(UserOrmMapper.toPersistence));
    }
}
