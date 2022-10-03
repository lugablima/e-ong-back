import { Request, Response } from "express";
import { ActingArea } from "@prisma/client";
import * as actingAreasService from "../services/actingAreasService";

export async function getAll(req: Request, res: Response) {
	const actingAreas: ActingArea[] = await actingAreasService.getAll();

	res.status(200).send(actingAreas);
}

export async function create() {
	//
}
