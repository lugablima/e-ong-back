import { DonationNeedData } from "../types/donationNeedsTypes";
import prisma from "../config/database";

export async function findAll(): Promise<DonationNeedData[]> {
	const donationNeeds: DonationNeedData[] = await prisma.donationNeed.findMany();

	return donationNeeds;
}

export function insert() {
	//
}
