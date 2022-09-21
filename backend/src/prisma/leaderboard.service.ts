import { PrismaService, accountUser } from "src/prisma.service";

export async function getTopTen(this: PrismaService) {
    const list = await this.prisma.user.findMany({
      select: {
        email: true,
        login: true,
        name: true,
        photo: true,
        score: true,
        isOnline: true,
      },
      orderBy: { score: 'desc' },
      take: 10,
    })
    let users: accountUser[] = [];
    for (let i in list) {
      const user: accountUser = {
        score: list[i].score,
        login: list[i].login,
        name: list[i].name,
        email: list[i].email,
        photo: list[i].photo,
        online: list[i].isOnline,
        win: await this.getNoWinnedMatchs(list[i].login),
        lost: await this.getNolostMatchs(list[i].login),
      }
      users.push(user);
    }
    return users;    
}