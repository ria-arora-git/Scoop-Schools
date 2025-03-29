/*
  Warnings:

  - Made the column `email` on table `School` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website` on table `School` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contact` on table `School` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `School` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "School" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "website" SET NOT NULL,
ALTER COLUMN "contact" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
