import prisma from "../config/database";
import { InsertMessageData, MessageData } from "../types/messagesTypes";

export async function insert(message: InsertMessageData): Promise<MessageData> {
	const result: MessageData = await prisma.message.create({ data: message });

	return result;
}

export async function findAll() {
	//
}
