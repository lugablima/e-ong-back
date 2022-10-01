/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `ongs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `ongs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ongs" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ongs_userId_key" ON "ongs"("userId");

-- AddForeignKey
ALTER TABLE "ongs" ADD CONSTRAINT "ongs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
