/*
  Warnings:

  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[atoken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rtoken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `atoken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rtoken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "token",
ADD COLUMN     "atoken" TEXT NOT NULL,
ADD COLUMN     "rtoken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_atoken_key" ON "User"("atoken");

-- CreateIndex
CREATE UNIQUE INDEX "User_rtoken_key" ON "User"("rtoken");
