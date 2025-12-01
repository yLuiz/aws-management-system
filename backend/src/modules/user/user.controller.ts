import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../application/use-cases/user/create-user.usecase';
import { GetUserByIdUseCase } from '../../application/use-cases/user/get-user-by-id.usecase';
import { CreateUserHttpDto } from './http-dtos/create-user.http.dto';
import { ListUsersUseCase } from 'src/application/use-cases/user/list-users.usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/user/update-user.usecase';
import { DeleteUserUseCase } from 'src/application/use-cases/user/delete-user.usecase';

@Controller('api/v1/users')
export class UserController {
    constructor(
        private readonly _createUserUseCase: CreateUserUseCase,
        private readonly _getUserByIdUseCase: GetUserByIdUseCase,
        private readonly _listUsersUseCase: ListUsersUseCase,
        private readonly _updateUserUseCase: UpdateUserUseCase,
        private readonly _deleteUserUseCase: DeleteUserUseCase,
    ) { }

    @ApiOkResponse({
        description: 'User created successfully',
        type: CreateUserHttpDto,
    })
    @Post()
    async create(@Body() body: CreateUserHttpDto) {
        return this._createUserUseCase.execute(body);
    }

    @ApiOkResponse({
        description: 'User retrieved successfully',
    })
    @Get(':id')
    async find(@Param('id') id: string) {
        return this._getUserByIdUseCase.execute(id);
    }

    @ApiOkResponse({
        description: 'List all users successfully',
    })
    @Get()
    async list() {
        return this._listUsersUseCase.execute();
    }

    @ApiOkResponse({
        description: 'User updated successfully',
    })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: CreateUserHttpDto) {
        return this._updateUserUseCase.execute(id, body);
    }

    @ApiOkResponse({
        description: 'User deleted successfully',
    })
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this._deleteUserUseCase.execute(id);
    }


}
