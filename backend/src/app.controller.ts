import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: PrismaService) {}

  @Get()
  getHello(): string {
    this.db.setUser("jiglesia", "Juan Iglesias", "Juan", "Iglesias", "jiglesia@student.42.fr", false, "token jiglesia", "atoken jiglesia", "photo url");
    this.db.setUser("mravily", "Medhi Ravily", "Medhi", "Ravily", "mravily@student.42.fr", false, "token mravily", "atoken mravily", "photo url ");
    // this.db.setChannel("new channel");
    this.db.setMatch(100, 50, "jiglesia", "mravily");
    return this.appService.getHello();
  }
}
