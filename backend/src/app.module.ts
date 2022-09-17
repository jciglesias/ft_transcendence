import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [LeaderBoardModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
