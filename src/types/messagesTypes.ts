import { Message } from "@prisma/client";

export type MessageData = Message;

export type CreateMessageData = Omit<Message, "id" | "userId" | "createdAt">;

export type InsertMessageData = Omit<Message, "id" | "createdAt">;
