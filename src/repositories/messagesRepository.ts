import prisma from "../config/database";
import { CreateMessageData, MessageData } from "../types/messagesTypes";

export async function insert(message: CreateMessageData): Promise<void> {
	await prisma.message.create({ data: message });
}

export async function findAllByUserIds(userId1: number, userId2: number): Promise<MessageData[]> {
	const result: MessageData[] = await prisma.message.findMany({
		where: {
			OR: [
				{ senderId: userId1, receiverId: userId2 },
				{ senderId: userId2, receiverId: userId1 },
			],
		},
		orderBy: { createdAt: "asc" },
	});

	return result;
}
