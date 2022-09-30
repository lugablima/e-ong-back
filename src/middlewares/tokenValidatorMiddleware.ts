import "../setup";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as errorHandlingUtils from "../utils/errorUtils";
import { UserId } from "../types/usersTypes";

export default function validateToken(req: Request, res: Response, next: NextFunction) {
	const authorization: string | undefined = req.header("Authorization");

	if (!authorization || !authorization.includes("Bearer ")) {
		throw errorHandlingUtils.badRequestError("The token was not sent!");
	}

	const token: string = authorization.replace("Bearer ", "").trim();

	if (!token) {
		throw errorHandlingUtils.badRequestError("The token was not sent!");
	}

	const { JWT_SECRET } = process.env as { JWT_SECRET: string };

	const { userId } = jwt.verify(token, JWT_SECRET) as UserId;

	res.locals.userId = userId;

	next();
}
