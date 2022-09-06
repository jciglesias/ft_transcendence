
import { flatten, INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Channel, channel } from 'diagnostics_channel';

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

  async setUser(login: string, name: string, email: string, role: Decimal) {
    const user = await prisma.user.create({
      data: {
        login: login,
        name: name,
        email: email,
        level: 0.0,
        score: 0,
        twoFA: false,
        status: 0,
        role: role,
      },
    })
    return user;
  }

  async setChannel() {
    const channel = await prisma.channel.create({})
  }
}
