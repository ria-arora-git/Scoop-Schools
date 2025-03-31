/*
  Warnings:

  - You are about to drop the column `contact` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `parentsName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `schools` on the `User` table. All the data in the column will be lost.
  - Added the required column `contact1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fatherOccupation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherOccupation` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school2` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "contact",
DROP COLUMN "createdAt",
DROP COLUMN "occupation",
DROP COLUMN "parentsName",
DROP COLUMN "schools",
ADD COLUMN     "contact1" TEXT NOT NULL,
ADD COLUMN     "contact2" TEXT NOT NULL,
ADD COLUMN     "fatherName" TEXT NOT NULL,
ADD COLUMN     "fatherOccupation" TEXT NOT NULL,
ADD COLUMN     "motherName" TEXT NOT NULL,
ADD COLUMN     "motherOccupation" TEXT NOT NULL,
ADD COLUMN     "school1" TEXT NOT NULL,
ADD COLUMN     "school2" TEXT NOT NULL,
ALTER COLUMN "address" DROP DEFAULT,
ALTER COLUMN "childName" DROP DEFAULT,
ALTER COLUMN "curriculum" DROP DEFAULT,
ALTER COLUMN "dob" DROP DEFAULT,
ALTER COLUMN "gender" DROP DEFAULT,
ALTER COLUMN "grade" DROP DEFAULT,
ALTER COLUMN "photo" DROP DEFAULT;
