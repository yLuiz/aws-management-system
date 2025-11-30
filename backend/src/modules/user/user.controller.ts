import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/use-cases/user/create-user.usecase';
import { GetUserByIdUseCase } from '../../application/use-cases/user/get-user-by-id.usecase';
import { CreateUserHttpDto } from './http-dtos/create-user.http.dto';

@Controller('api/v1/users')
export class UserController {
    constructor(
        private readonly _createUserUseCase: CreateUserUseCase,
        private readonly _getUserByIdUseCase: GetUserByIdUseCase,
    ) { }

    @Post()
    async create(@Body() body: CreateUserHttpDto) {
        return this._createUserUseCase.execute(body);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return this._getUserByIdUseCase.execute(id);
    }
}
