import { PrismaService } from "src/prisma.service";

export async function setUser(
    this: PrismaService,
    login: string,
    name: string,
    email: string,
    isAdmin: boolean,
    rtoken: string,
    atoken: string,
    photo: string) {
    await this.prisma.user.upsert({
        where: { login: login },
        update: { atoken: atoken, rtoken: rtoken },
        create: {
            login: login,
            name: name,
            email: email,
            level: 0.0,
            score: 0,
            atoken: atoken,
            rtoken: rtoken,
            twoFA: false,
            isOnline: true,
            isAdmin: isAdmin,
            photo: photo
        }
    })
}

export async function setBlockUser(this: PrismaService, login: string, block_login: string) {
    await this.prisma.blockUser.create({
        data: {
            blockerId: login,
            blockedId: block_login,
        }
    })
}

export async function setFriend(this: PrismaService, login1: string, login2: string) {
    await this.prisma.addFriend.create({
        data: {
            friend1Id: login1,
            friend2Id: login2,
        },
        include: {friend1: true, friend2: true}
    })
}

export async function set2FA(this: PrismaService,login: string, twoFA: string) {
    await this.prisma.user.update({
        where: { login: login },
        data: { twoFA: true, twoFApwd: twoFA },
    })
}

export async function updateUserScore(this: PrismaService,login: string, score: number) {
    await this.prisma.user.update({
        where: {login: login},
        data: {score: score},
    })
}

export async function updateUserStatus(this: PrismaService,login: string, status: boolean) {
    await this.prisma.user.update({
        where: { login: login },
        data: { isOnline: status },
    })
}

export async function getBlockedUsers(this: PrismaService,login: string) {
    const blockedList = await this.prisma.user.findUnique({
        where: { login: login },
        select: { blockedUsers: {
            select: {
                blocked: {
                    select: {
                        login: true,
                        name: true,
                        email: true,
                        level: true,
                        score: true,
                        photo: true,
                        isOnline: true,
                    }
                }
            }
        }},
    })
    let list;
    for (let i = 0; blockedList.blockedUsers[i]; i++) {
        list[i] = blockedList.blockedUsers[i];
  }
  return list;
}

export async function getUser(this: PrismaService, login: string) {
    const usr = await this.prisma.user.findUnique({
        where: {login: login}
        })
    return usr;
}

export async function getFriends(this: PrismaService, login: string) {
    const friends = await this.prisma.user.findUnique({
        where: { login: login },
        select: { 
          friends: {
            select: {
              friend1: {
                select: {
                  login: true,
                  name: true,
                  email: true,
                  level: true,
                  score: true,
                  photo: true,
                  isOnline: true,
                }
              },
            }
          },
          befriend: {
            select: {
              friend2: {
                select: {
                  login: true,
                  name: true,
                  email: true,
                  level: true,
                  score: true,
                  photo: true,
                  isOnline: true,
                }
              },
            }
          },
        }
      })
    let friendlist;
    let a = 0;
    for (let i = 0; friends.friends[i] ; i++) {
      friendlist[a++] = friends.friends[i];
    }
    for (let i = 0; friends.befriend[i] ; i++) {
      friendlist[a++] = friends.befriend[i];
    }
    return friendlist;
}

export async function getUserAccount(this: PrismaService, login: string) {
    const user = await this.prisma.user.findFirst({
      where: { login: login },
      select: {
        login: true,
        createdAt: true,
        name: true,
        email: true,
        level: true,
        score: true,
        photo: true,
        twoFA: true,
        isOnline: true,
        isAdmin: true,
        channelList: {
          select: {
            channelId: true,
          }
        },
        mutedChannel: {
          select: {
            channelId: true,
          }
        },
        adminChannel: {
          select: {
            channelId: true,
          }
        },
        winnedMatchs: {
          select: {
            id: true,
            createdAt: true,
            winnerScore: true,
            looserScore: true,
            looserid: true,
          }
        },
        lostMatchs: {
          select: {
            id: true,
            createdAt: true,
            winnerScore: true,
            looserScore: true,
            winnerid: true,
          }
        },
        friends: {
          select: {
            friend1: {
              select: {
                login: true,
                name: true,
                isOnline: true,
              }
            },
          }
        },
        befriend: {
          select: {
            friend2: {
              select: {
                login: true,
                name: true,
                isOnline: true,
              }
            }
          }
        },
        blockedUsers: {
          select: {
            blockedId: true,
          }
        },
        blockedFrom: {
          select: {
            blockerId: true,
          }
        },
        bannedFrom: {
          select: {
            channelId: true,
          }
        },
      }
    })
    return user;
}