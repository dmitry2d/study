import { IsString } from "class-validator";

export class CreateRoleDto {

    @IsString({message: 'must be a string'})
    readonly value: string;
    @IsString({message: 'must be a string'})
    readonly description: string;
}