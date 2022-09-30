/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `socialMedias` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "socialMedias_address_key" ON "socialMedias"("address");
