import { Controller, Get } from "@nestjs/common";

@Controller ('/api')
export class appController {
    @Get ('/users')
    getUsers () {
        [{id: 1, name: 'dmitry2d'}]
    }
}