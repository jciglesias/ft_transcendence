/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - Added the required column `isAdmin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOnline` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `photo` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
DROP COLUMN "status",
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL,
ADD COLUMN     "isOnline" BOOLEAN NOT NULL,
ALTER COLUMN "photo" SET NOT NULL;

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "UserStatus";
