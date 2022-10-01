import { ActingArea } from "@prisma/client";
import prisma from "../config/database";

export async function insert(name: string): Promise<ActingArea> {
	const actingArea: ActingArea = await prisma.actingArea.create({ data: { name } });

	return actingArea;
}

export async function findByName(name: string): Promise<ActingArea | null> {
	const actingArea: ActingArea | null = await prisma.actingArea.findUnique({ where: { name } });

	return actingArea;
}

export async function findAll() {
	//
}
