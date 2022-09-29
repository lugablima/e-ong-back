-- CreateTable
CREATE TABLE "ongs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "actingAreaId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ongs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ongs_name_key" ON "ongs"("name");

-- AddForeignKey
ALTER TABLE "ongs" ADD CONSTRAINT "ongs_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ongs" ADD CONSTRAINT "ongs_actingAreaId_fkey" FOREIGN KEY ("actingAreaId") REFERENCES "actingAreas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
