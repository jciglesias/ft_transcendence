import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PongController } from './pong/pong.controller'
import { PongService } from './pong/pong.service'

@Module({
  imports: [],
  controllers: [AppController, PongController],
  providers: [AppService, PongService],
})
export class AppModule {}
