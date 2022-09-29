-- CreateTable
CREATE TABLE "ongsSocialMedias" (
    "id" SERIAL NOT NULL,
    "ongId" INTEGER NOT NULL,
    "socialMediaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ongsSocialMedias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ongsSocialMedias" ADD CONSTRAINT "ongsSocialMedias_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ongsSocialMedias" ADD CONSTRAINT "ongsSocialMedias_socialMediaId_fkey" FOREIGN KEY ("socialMediaId") REFERENCES "socialMedias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
