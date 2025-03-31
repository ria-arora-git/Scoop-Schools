/*
  Warnings:

  - You are about to drop the column `childName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `contact1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `contact2` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "childName",
DROP COLUMN "contact1",
DROP COLUMN "contact2",
DROP COLUMN "createdAt",
DROP COLUMN "photo",
ADD COLUMN     "clerkId" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "curriculum" DROP NOT NULL,
ALTER COLUMN "dob" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "grade" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
