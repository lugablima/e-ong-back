/*
  Warnings:

  - Added the required column `ongId` to the `phones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "phones" ADD COLUMN     "ongId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
