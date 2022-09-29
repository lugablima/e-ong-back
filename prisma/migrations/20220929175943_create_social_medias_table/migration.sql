-- CreateTable
CREATE TABLE "socialMedias" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "socialMedias_pkey" PRIMARY KEY ("id")
);
