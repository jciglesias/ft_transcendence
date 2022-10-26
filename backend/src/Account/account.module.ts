import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AccountController } from "./account.controller";
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        // JwtModule.register({
        //     secret: process.env.JWT_PRIV_KEY,
        //     signOptions: { expiresIn: '60s' },
        //   })
    ],
    controllers: [AccountController],
    providers: [PrismaService],
})
export class AccountModule {}