-- CreateTable
CREATE TABLE "ongsPhones" (
    "id" SERIAL NOT NULL,
    "ongId" INTEGER NOT NULL,
    "phoneId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ongsPhones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ongsPhones" ADD CONSTRAINT "ongsPhones_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ongsPhones" ADD CONSTRAINT "ongsPhones_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "phones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
