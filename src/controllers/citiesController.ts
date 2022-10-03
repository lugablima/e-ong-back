import { Request, Response } from "express";
import * as citiesService from "../services/citiesService";
import { CityData } from "../types/citiesTypes";

export async function getAll(req: Request, res: Response) {
	const cities: CityData[] = await citiesService.getAll();

	res.status(200).send(cities);
}

export async function create() {
	//
}
