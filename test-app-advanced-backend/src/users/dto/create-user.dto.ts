import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@email.com', description: 'Email'})
    @IsString({message: 'must be a string'})
    @IsEmail({}, {message: 'incorrect format'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @IsString({message: 'must be a string'})
    @Length(4, 16, {message: 'must have 4 to 16 symbols'})
    readonly password: string;

}