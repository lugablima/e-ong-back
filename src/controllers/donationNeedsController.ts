import { Request, Response } from "express";
import * as donationNeedsService from "../services/donationNeedsService";
import { DonationNeedData } from "../types/donationNeedsTypes";

export async function getAll(req: Request, res: Response) {
	const donationNeeds: DonationNeedData[] = await donationNeedsService.getAll();

	res.status(200).send(donationNeeds);
}

export async function create() {
	//
}
