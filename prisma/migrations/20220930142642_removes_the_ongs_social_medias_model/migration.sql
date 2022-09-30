/*
  Warnings:

  - You are about to drop the `ongsSocialMedias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ongsSocialMedias" DROP CONSTRAINT "ongsSocialMedias_ongId_fkey";

-- DropForeignKey
ALTER TABLE "ongsSocialMedias" DROP CONSTRAINT "ongsSocialMedias_socialMediaId_fkey";

-- DropTable
DROP TABLE "ongsSocialMedias";
