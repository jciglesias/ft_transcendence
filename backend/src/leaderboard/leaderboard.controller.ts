import { Controller, Get } from "@nestjs/common";
import { PrismaService, accountUser } from "src/prisma.service";
// import { getTopTen } from "src/prisma/leaderboard.service"

@Controller('leaderboard')
export class LeaderBoardController {
    constructor(private db: PrismaService) {}

    @Get()
    getLeaderBoard() {
        return this.db.getTopTen();
    }
}