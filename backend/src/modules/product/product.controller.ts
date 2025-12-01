import { Controller, Post, Get, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateProductUseCase } from 'src/application/use-cases/product/create-product.usecase';
import { CreateProductHttpDto } from './http-dtos/create-product.http.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ListProductsUseCase } from 'src/application/use-cases/product/list-products.usecase';
import { GetProductByIdUseCase } from 'src/application/use-cases/product/get-product-by-id.usecase';
import { UpdateProductUseCase } from 'src/application/use-cases/product/update-product.usecase';
import { DeleteProductUseCase } from 'src/application/use-cases/product/delete-product.usecase';

@Controller('api/v1/products')
export class ProductController {
    constructor(
        private readonly _createProductUseCase: CreateProductUseCase,
        private readonly _getProductByIdUseCase: GetProductByIdUseCase,
        private readonly _listProductsUseCase: ListProductsUseCase,
        private readonly _updateProductUseCase: UpdateProductUseCase,
        private readonly _deleteProductUseCase: DeleteProductUseCase,
    ) { }

    @ApiResponse({
        status: 201,
        description: 'Product created successfully',
        type: CreateProductHttpDto,
    })
    @Post()
    async create(@Body() body: CreateProductHttpDto) {
        return this._createProductUseCase.execute(body);
    }

    @ApiResponse({
        status: 200,
        description: 'List of products retrieved successfully',
        type: [CreateProductHttpDto],
    })
    @Get()
    async list() {
        return this._listProductsUseCase.execute();
    }

    @ApiResponse({
        status: 200,
        description: 'Product retrieved successfully',
    })
    @Get(':id')
    async getById(@Param('id') id: string) {
        return this._getProductByIdUseCase.execute(id);
    }

    @ApiResponse({
        status: 200,
        description: 'Product updated successfully',
    })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: CreateProductHttpDto) {
        return this._updateProductUseCase.execute(id, body);
    }

    @ApiResponse({
        status: 200,
        description: 'Product deleted successfully',
    })
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this._deleteProductUseCase.execute(id);
    }
}