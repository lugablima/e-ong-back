import { DonationNeed } from "@prisma/client";

export type DonationNeedData = DonationNeed;

export type CreateDonationNeedData = Omit<DonationNeed, "id" | "createdAt">;
