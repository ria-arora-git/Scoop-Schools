/*
  Warnings:

  - You are about to drop the column `clerkId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_clerkId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerkId",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "address" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "childName" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "contact" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "curriculum" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dob" TEXT NOT NULL DEFAULT '2000-01-01',
ADD COLUMN     "gender" TEXT NOT NULL DEFAULT 'Not Specified',
ADD COLUMN     "grade" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "occupation" TEXT[],
ADD COLUMN     "parentsName" TEXT[],
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "schools" TEXT[];
