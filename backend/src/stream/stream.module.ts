import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { StreamController } from "./stream.controller";

@Module({
    imports: [],
    controllers: [StreamController],
    providers: [PrismaService],
})
export class StreamModule {}