/*
  Warnings:

  - You are about to drop the `ongsPhones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ongsPhones" DROP CONSTRAINT "ongsPhones_ongId_fkey";

-- DropForeignKey
ALTER TABLE "ongsPhones" DROP CONSTRAINT "ongsPhones_phoneId_fkey";

-- DropTable
DROP TABLE "ongsPhones";
