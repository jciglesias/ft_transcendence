/*
  Warnings:

  - You are about to drop the column `level` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `PrivMessage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imgUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrivMessage" DROP CONSTRAINT "PrivMessage_fromId_fkey";

-- DropForeignKey
ALTER TABLE "PrivMessage" DROP CONSTRAINT "PrivMessage_toId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "level",
DROP COLUMN "photo",
ADD COLUMN     "imgUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "PrivMessage";

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filename" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photos_userId_key" ON "Photos"("userId");

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("login") ON DELETE RESTRICT ON UPDATE CASCADE;
