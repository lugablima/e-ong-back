-- CreateTable
CREATE TABLE "donationNeedsOngs" (
    "id" SERIAL NOT NULL,
    "ongId" INTEGER NOT NULL,
    "donationNeedId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donationNeedsOngs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donationNeedsOngs" ADD CONSTRAINT "donationNeedsOngs_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donationNeedsOngs" ADD CONSTRAINT "donationNeedsOngs_donationNeedId_fkey" FOREIGN KEY ("donationNeedId") REFERENCES "donationNeeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
