import { OngData, CreateOngData } from "../types/ongsTypes";
import * as ongsRepository from "../repositories/ongsRepository";
import * as errorUtils from "../utils/errorUtils";

async function checksIfTheOngNameAlreadyExists(ongName: string) {
	const ong: OngData | null = await ongsRepository.findByName(ongName);

	if (ong) {
		throw errorUtils.conflictError("This ONG name already exists!");
	}
}

// export async function create(ong: CreateOngData) {
// 	await checksIfTheOngNameAlreadyExists(ong.name);

// 	await messagesRepository.insert({ userId, ongId, message });
// }

export async function get() {
	//
}
