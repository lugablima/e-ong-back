import { Request, Response } from "express";
import { CreateMessageData } from "../types/messagesTypes";
import { UserId } from "../types/usersTypes";
import * as messagesService from "../services/messagesService";

export async function create(req: Request, res: Response) {
	const { userId } = res.locals as UserId;
	const message: CreateMessageData = req.body;

	await messagesService.create(message, userId);

	res.status(201).send("Message sent successfully!");
}

export async function get() {
	//
}
