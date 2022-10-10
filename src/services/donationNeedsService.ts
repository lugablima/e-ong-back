import * as donationNeedsRepository from "../repositories/donationNeedsRepository";
import { DonationNeedData } from "../types/donationNeedsTypes";

export async function getAll() {
	const donationNeeds: DonationNeedData[] = await donationNeedsRepository.findAll();

	return donationNeeds;
}

export async function insert() {
	//
}
