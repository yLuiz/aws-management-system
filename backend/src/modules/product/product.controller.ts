import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CreateProductUseCase } from 'src/application/use-cases/product/create-product.usecase';
import { CreateProductHttpDto } from './http-dtos/create-product.http.dto';

@Controller('api/v1/products')
export class ProductController {
    constructor(
        private readonly _createProductUseCase: CreateProductUseCase,
    ) { }

    @Post()
    async create(@Body() body: CreateProductHttpDto) {
        return this._createProductUseCase.execute(body);
    }
}
