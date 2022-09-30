import { UserData, CreateUserData } from "../types/usersTypes";
import prisma from "../config/database";

export async function findByEmail(email: string): Promise<UserData | null> {
	const result: UserData | null = await prisma.user.findUnique({ where: { email } });

	return result;
}

export async function findById(id: number): Promise<UserData | null> {
	const result: UserData | null = await prisma.user.findUnique({ where: { id } });

	return result;
}

export async function insert(userData: CreateUserData): Promise<UserData> {
	const result: UserData = await prisma.user.create({ data: userData });

	return result;
}
