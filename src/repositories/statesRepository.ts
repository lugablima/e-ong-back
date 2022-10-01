import { State } from "@prisma/client";
import prisma from "../config/database";

export async function findByName(name: string): Promise<State | null> {
	const state: State | null = await prisma.state.findFirst({
		where: {
			name: {
				equals: name,
				mode: "insensitive",
			},
		},
	});

	return state;
}

export async function findAll(): Promise<State[]> {
	const states: State[] = await prisma.state.findMany();

	return states;
}
