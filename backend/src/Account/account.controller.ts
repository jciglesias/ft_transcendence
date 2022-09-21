import { Controller, Get, Param, Req } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { JwtService } from '@nestjs/jwt';

@Controller('account')
export class AccountController {
    constructor(private jwtService: JwtService, private db: PrismaService) {}

    @Get(':id')
    getUserAccount(@Param('id') id: string) {
    // getUserAccount(@Req() req) {
    //     let token = req.cookies;
    //     type PayloadType = {
    //         login: string;
    //     };
    //     console.log('myatoken', token);
    //     const decodeJwt = this.jwtService.decode(token) as PayloadType;
    //     console.log('decode', decodeJwt.login);
        return this.db.getUserAccount(id);
        // return decodeJwt.login;
    }
}