import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductHttpDto {
    @ApiProperty({
        description: "The name of the product",
        example: "Wireless Mouse",
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "The description of the product",
        example: "A high-precision wireless mouse with ergonomic design",
        required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: "The price of the product",
        example: 229.99,
    })
    @IsNumber()
    price: number;

    @ApiProperty({
        description: "The available stock of the product",
        example: 150,
    })
    @IsNumber()
    stock: number;
}