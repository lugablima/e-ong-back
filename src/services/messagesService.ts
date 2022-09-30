import { CreateMessageData, MessageData } from "../types/messagesTypes";
import { OngData } from "../types/ongsTypes";
import { UserData } from "../types/usersTypes";
import * as messagesRepository from "../repositories/messagesRepository";
import * as usersRepository from "../repositories/usersRepository";
import * as ongsRepository from "../repositories/ongsRepository";
import * as errorUtils from "../utils/errorUtils";

async function findOngByIdOrFail(ongId: number) {
	const ong: OngData | null = await ongsRepository.findById(ongId);

	if (!ong) {
		throw errorUtils.notFoundError("ONG not found!");
	}
}

export async function findUserByIdOrFail(userId: number) {
	const user: UserData | null = await usersRepository.findById(userId);

	if (!user) {
		throw errorUtils.notFoundError("User not found!");
	}
}

export async function create({ userId, ongId, message }: CreateMessageData) {
	await findUserByIdOrFail(userId);

	await findOngByIdOrFail(ongId);

	await messagesRepository.insert({ userId, ongId, message });
}

export async function get(ongId: number, userId: number) {
	if (!ongId || !userId) {
		throw errorUtils.badRequestError("Invalid ongId or userId parameter!");
	}

	await findOngByIdOrFail(ongId);

	await findUserByIdOrFail(userId);

	const messages: MessageData[] = await messagesRepository.findAllByOngIdAndUserId(ongId, userId);

	return messages;
}
