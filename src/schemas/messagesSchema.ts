import joi from "joi";
import { PayloadMessageData } from "../types/messagesTypes";

const messageSchema = joi.object<PayloadMessageData>({
	receiverId: joi.number().integer().positive().required(),
	message: joi.string().trim().required(),
});

export default messageSchema;
