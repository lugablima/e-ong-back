import "../setup";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as usersService from "../services/usersService";
import * as errorUtils from "../utils/errorUtils";
import { UserId } from "../types/usersTypes";

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
	const authorization: string | undefined = req.header("Authorization");

	if (!authorization || !authorization.includes("Bearer ")) {
		throw errorUtils.badRequestError("The token was not sent!");
	}

	const token: string = authorization.replace("Bearer ", "").trim();

	if (!token) {
		throw errorUtils.badRequestError("The token was not sent!");
	}

	try {
		const { JWT_SECRET } = process.env as { JWT_SECRET: string };

		const { userId } = jwt.verify(token, JWT_SECRET) as UserId;

		await usersService.findUserByIdOrFail(userId);
		res.locals.userId = userId;

		next();
	} catch (error) {
		throw errorUtils.unauthorizedError("Invalid token!");
	}
}
