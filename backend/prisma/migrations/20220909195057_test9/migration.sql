/*
  Warnings:

  - Added the required column `is_pwd` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "is_pwd" BOOLEAN NOT NULL;
