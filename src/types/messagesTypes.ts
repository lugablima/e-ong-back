import { Message } from "@prisma/client";

export type MessageData = Message;

export type CreateMessageData = Omit<Message, "id" | "createdAt">;

export type PayloadMessageData = Omit<Message, "id" | "senderId" | "createdAt">;
