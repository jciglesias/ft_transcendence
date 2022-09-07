
import { flatten, INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ChannelStatus, PrismaClient, UserRole, UserStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

const prisma = new PrismaClient()

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async setUser(login: string, name: string, email: string, role: UserRole) {
    const user = await prisma.user.create({
      data: {
        login: login,
        name: name,
        email: email,
        level: 0.0,
        score: 0,
        twoFA: false,
        status: UserStatus.OnLine,
        role: role,
      },
    })
    return user;
  }

  async setChannel(name: string) {
    const channel = await prisma.channel.create({
      data: {
        channelName: name,
        status: ChannelStatus.Active,
      },
    })
  }

  async setMatch(w_score: number, l_score: number, w_login: string, l_login: string) {
    const match = await prisma.match.create({
      data: {
        winnerScore: w_score,
        looserScore: l_score,
        winnerid: w_login,
        looserid: l_login,
      }
    })
  }
}
