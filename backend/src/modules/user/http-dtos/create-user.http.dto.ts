import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserHttpDto {

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'strongPassword123',
  })
  @MinLength(6)
  password: string;
}
