import prisma from "../config/database";
import { OngData } from "../types/ongsTypes";

export async function insert() {
	//
}

export async function findById(id: number): Promise<OngData | null> {
	const result: OngData | null = await prisma.ong.findUnique({ where: { id } });

	return result;
}
