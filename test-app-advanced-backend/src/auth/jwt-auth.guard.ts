import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

export class jwtAuthGuard implements CanActivate {
    constructor(jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        try {
            const authHeader = request.header.authotization
            const [bearer, token] = authHeader.split(' ')
            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException ({message: 'Unauthorized'})
            }
        } catch (error) {
            throw new UnauthorizedException ({message: 'Unauthorized'})
        }
    }

}