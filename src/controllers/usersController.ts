import { Request, Response } from "express";
import { CreateUserData, UserToken } from "../types/usersTypes";
import * as usersService from "../services/usersService";

export async function signUp(req: Request, res: Response) {
	const userData: CreateUserData = req.body;

	await usersService.signUp(userData);

	res.status(201).send("User registered successfully!");
}

export async function signIn(req: Request, res: Response) {
	const userData = req.body;

	const token: UserToken = await usersService.signIn(userData);

	res.status(200).send(token);
}
