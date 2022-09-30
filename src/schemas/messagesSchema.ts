import joi from "joi";
import { CreateMessageData } from "../types/messagesTypes";

const messageSchema = joi.object<CreateMessageData>({
	userId: joi.number().integer().positive().required(),
	ongId: joi.number().integer().positive().required(),
	message: joi.string().trim().required(),
});

export default messageSchema;
