import { CityData, CreateCityData } from "../types/citiesTypes";
import prisma from "../config/database";

export async function findByNameAndStateId(name: string, stateId: number): Promise<CityData | null> {
	const city: CityData | null = await prisma.city.findFirst({
		where: {
			AND: [
				{
					name: {
						equals: name,
						mode: "insensitive",
					},
				},
				{
					stateId,
				},
			],
		},
	});

	return city;
}

export async function insert(cityData: CreateCityData): Promise<CityData> {
	const city: CityData = await prisma.city.create({ data: cityData });

	return city;
}

export async function findById(id: number): Promise<CityData | null> {
	const city: CityData | null = await prisma.city.findUnique({ where: { id } });

	return city;
}
