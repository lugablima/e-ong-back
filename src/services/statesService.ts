import { State } from "@prisma/client";
import * as statesRepository from "../repositories/statesRepository";

export async function getAll() {
	const states: State[] = await statesRepository.findAll();

	return states;
}

export async function insert() {
	//
}
