/*
  Warnings:

  - Added the required column `ongId` to the `socialMedias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "socialMedias" ADD COLUMN     "ongId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "socialMedias" ADD CONSTRAINT "socialMedias_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
