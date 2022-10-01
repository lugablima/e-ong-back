import joi from "joi";
import { CreateOngData } from "../types/ongsTypes";

const ongSchema = joi.object<CreateOngData>({
	name: joi.string().trim().required(),
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
	actingArea: joi.string().trim().required(),
	description: joi.string().trim(),
	address: joi
		.object({
			street: joi.string().trim().required(),
			neighborhood: joi.string().trim().required(),
			number: joi.string().trim().required(),
			complement: joi.string().trim(),
			zipCode: joi.string().trim().required(),
			city: joi.string().trim().required(),
			state: joi.string().trim().required(),
		})
		.required(),
});

export default ongSchema;
