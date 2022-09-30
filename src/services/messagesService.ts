import { CreateMessageData } from "../types/messagesTypes";
import { OngData } from "../types/ongsTypes";
import * as messagesRepository from "../repositories/messagesRepository";
import * as ongsRepository from "../repositories/ongsRepository";
import * as errorUtils from "../utils/errorUtils";

async function findOngByIdOrFail(ongId: number) {
	const ong: OngData | null = await ongsRepository.findById(ongId);

	if (!ong) {
		throw errorUtils.notFoundError("ONG not found!");
	}
}

export async function create({ ongId, message }: CreateMessageData, userId: number) {
	await findOngByIdOrFail(ongId);

	await messagesRepository.insert({ userId, ongId, message });
}

export async function get() {
	//
}
