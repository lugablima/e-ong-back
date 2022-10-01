import { CreateMessageData, MessageData } from "../types/messagesTypes";
import { UserData } from "../types/usersTypes";
import * as messagesRepository from "../repositories/messagesRepository";
import * as usersRepository from "../repositories/usersRepository";
import * as errorUtils from "../utils/errorUtils";

export async function findUserByIdOrFail(userId: number, userType?: string) {
	const user: UserData | null = await usersRepository.findById(userId);

	if (!user) {
		throw errorUtils.notFoundError(`${userType ?? "User"} not found!`);
	}
}

export async function create({ senderId, receiverId, message }: CreateMessageData) {
	await findUserByIdOrFail(receiverId, "Receiver");

	// Fazer sanitização do message

	await messagesRepository.insert({ senderId, receiverId, message });
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
