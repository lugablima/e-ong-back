import { Request, Response } from "express";
import { PayloadMessageData, MessageData } from "../types/messagesTypes";
import * as messagesService from "../services/messagesService";

export async function create(req: Request, res: Response) {
	const senderId: number = res.locals.userId;
	const payloadMessage: PayloadMessageData = req.body;

	await messagesService.create({ ...payloadMessage, senderId });

	res.status(200).send("Message sent successfully!");
}

export async function get(req: Request, res: Response) {
	const { ongId, userId } = req.params;

	const messages: MessageData[] = await messagesService.get(+ongId, +userId);

	res.status(200).send(messages);
}
