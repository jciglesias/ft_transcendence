import { Module } from '@nestjs/common';
import { AccountModule } from './Account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaderBoardModule } from './leaderboard/leaderboard.module';
import { PrismaService } from './prisma.service';
import { StreamModule } from './stream/stream.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [LeaderBoardModule, AccountModule, UploadsModule, StreamModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
