import { Request, Response } from "express";
import { CreateOngData } from "../types/ongsTypes";
import * as ongsService from "../services/ongsService";

export async function create(req: Request, res: Response) {
	const ong: CreateOngData = req.body;

	await ongsService.create(ong);

	res.status(201).send("ONG created successfully!");
}

export async function get(req: Request, res: Response) {
	const { cityId } = req.params as { cityId: string };

	const ongs = await ongsService.get(+cityId);

	res.status(200).send(ongs);
}
