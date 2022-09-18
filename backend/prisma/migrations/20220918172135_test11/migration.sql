-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "BanUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "channelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BanUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BanUser_channelId_userId_key" ON "BanUser"("channelId", "userId");

-- AddForeignKey
ALTER TABLE "BanUser" ADD CONSTRAINT "BanUser_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("channelName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BanUser" ADD CONSTRAINT "BanUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("login") ON DELETE RESTRICT ON UPDATE CASCADE;
