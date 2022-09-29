-- CreateTable
CREATE TABLE "donationNeeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donationNeeds_pkey" PRIMARY KEY ("id")
);
