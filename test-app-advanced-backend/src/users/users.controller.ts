import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor (
        private usersService: UsersService
    ){}

    @ApiOperation({summary: 'Create User'})
    @ApiResponse ({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
    
    @ApiOperation({summary: 'Get User List'})
    @ApiResponse ({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
