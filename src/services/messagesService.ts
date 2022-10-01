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

export async function get(userId1: number, userId2: number) {
	if (!userId2) {
		throw errorUtils.badRequestError("Invalid userId parameter!");
	}

	await findUserByIdOrFail(userId2, "User defined in userId parameter");

	const messages: MessageData[] = await messagesRepository.findAllByUserIds(userId1, userId2);

	return messages;
}
