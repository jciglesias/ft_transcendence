import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Controller('Account')
export class AccountController {
    constructor(private db: PrismaService) {}

    @Get()
    getUserAccount(login: string) {
        return this.db.getUserAccount(login);
    }
}