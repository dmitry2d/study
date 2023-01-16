import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
        ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        
        if (!requiredRoles) {
            return true;
        }
        try {
            const authHeader = request.headers.authorization
            const [bearer, token] = authHeader.split(' ')

            if (bearer !== 'Bearer' || !token) {
                this.throw()
            }
            const user = this.jwtService.verify(token)
            request.user = user
            if (!user.roles.some(role => requiredRoles.includes(role.value))) {
                this.throw()
            }
            return true;

        } catch (error) {
            this.throw()
        }

    }

    throw () {
        throw new HttpException ('Forbidden', HttpStatus.FORBIDDEN)
    }

}