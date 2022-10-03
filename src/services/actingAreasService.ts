import { ActingArea } from "@prisma/client";
import * as actingAreasRepository from "../repositories/actingAreasRepository";

export async function getAll() {
	const actingAreas: ActingArea[] = await actingAreasRepository.findAll();

	return actingAreas;
}

export async function insert() {
	//
}
