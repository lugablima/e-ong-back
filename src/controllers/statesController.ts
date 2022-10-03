import { Request, Response } from "express";
import { State } from "@prisma/client";
import * as statesService from "../services/statesService";

export async function getAll(req: Request, res: Response) {
	const states: State[] = await statesService.getAll();

	res.status(200).send(states);
}

export async function create() {
	//
}
