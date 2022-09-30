import prisma from "../config/database";
import { CreateMessageData, MessageData } from "../types/messagesTypes";

export async function insert(message: CreateMessageData): Promise<void> {
	await prisma.message.create({ data: message });
}

export async function findAllByOngIdAndUserId(ongId: number, userId: number): Promise<MessageData[]> {
	const result: MessageData[] = await prisma.message.findMany({ where: { ongId, userId }, orderBy: { id: "asc" } });

	return result;
}
