import * as citiesRepository from "../repositories/citiesRepository";
import { CityData } from "../types/citiesTypes";

export async function getAll() {
	const cities: CityData[] = await citiesRepository.findAll();

	return cities;
}

export async function insert() {
	//
}
