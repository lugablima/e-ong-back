/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `donationNeeds` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "donationNeeds_name_key" ON "donationNeeds"("name");
