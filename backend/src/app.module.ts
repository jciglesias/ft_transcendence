import { Module } from '@nestjs/common';
import { AccountModule } from './Account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';
import { PrismaService } from './prisma.service';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [LeaderBoardModule, AccountModule, UploadsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
