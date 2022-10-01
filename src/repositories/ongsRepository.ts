import prisma from "../config/database";
import { OngData, InsertOngData } from "../types/ongsTypes";

export async function insert(ong: InsertOngData) {
	await prisma.ong.create({ data: ong });
}

export async function findById(id: number): Promise<OngData | null> {
	const result: OngData | null = await prisma.ong.findUnique({ where: { id } });

	return result;
}

export async function findByName(name: string): Promise<OngData | null> {
	const result: OngData | null = await prisma.ong.findUnique({ where: { name } });

	return result;
}
