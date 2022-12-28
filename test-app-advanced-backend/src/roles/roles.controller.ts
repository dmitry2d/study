import { Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    
    constructor(private rolesService: RolesService) {}

    @Post()
    create(dto: CreateRoleDto) {
        return this.rolesService.createRole(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }

}
