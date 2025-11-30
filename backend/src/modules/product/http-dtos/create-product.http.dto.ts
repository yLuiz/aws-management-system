import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductHttpDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    price: number;

    @IsNumber()
    stock: number;
}