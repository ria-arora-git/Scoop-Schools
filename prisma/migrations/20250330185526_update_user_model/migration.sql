/*
  Warnings:

  - You are about to drop the column `fatherOccupation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `motherOccupation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `school1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `school2` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fatherOccupation",
DROP COLUMN "motherOccupation",
DROP COLUMN "school1",
DROP COLUMN "school2";
