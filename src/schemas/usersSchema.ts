import joi from "joi";
import { CreateUserData } from "../types/usersTypes";

export const signUpSchema = joi.object<CreateUserData>({
	name: joi.string().trim().required(),
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
});

export const signInSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
});
