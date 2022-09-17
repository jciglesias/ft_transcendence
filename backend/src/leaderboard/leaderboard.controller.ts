import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Controller('leaderboard')
export class LeaderBoardController {
    constructor(private db: PrismaService) {}

    @Get()
    getLeaderBoard() {
        return this.db.getTopTen();
    }
}