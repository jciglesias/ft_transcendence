import { Controller, Get } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private db: PrismaService) {}

  @Get()
  getHello(): string {
    this.db.setUser("jiglesia", "Juan Iglesias", "jiglesia@student.42.fr", UserRole.User, "token jiglesia");
    this.db.setUser("mravily", "Medhi Ravily", "mravily@student.42.fr", UserRole.User, "token mravily");
    this.db.setChannel("new channel");
    this.db.setMatch(100, 50, "jiglesia", "mravily");
    return this.appService.getHello();
  }
}
