import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PongController } from './pong/pong.controller'
import { PongModule } from './pong/pong.module';
// import { PongService } from './pong/pong.service'

@Module({
  imports: [PongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
