import joi from "joi";
import { CreateMessageData } from "../types/messagesTypes";

const messageSchema = joi.object<CreateMessageData>({
	ongId: joi.number().integer().required(),
	message: joi.string().trim().required(),
});

export default messageSchema;
