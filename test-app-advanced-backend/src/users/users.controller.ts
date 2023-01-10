import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AddRoleDto } from 'src/auth/dto/add-role.dto';
import { jwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';
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
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Add Role'})
    @ApiResponse ({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() roleDto: AddRoleDto) {
        return this.usersService.addRole(roleDto);
    }

    @ApiOperation({summary: 'Ban User'})
    @ApiResponse ({status: 200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() banDto: BanUserDto) {
        return this.usersService.ban(banDto);
    }
}
