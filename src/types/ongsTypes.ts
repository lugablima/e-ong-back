import { Ong } from "@prisma/client";
import { CreateAddressData } from "./addressesTypes";

export type OngData = Ong;

export interface CreateOngData {
	name: string;
	email: string;
	password: string;
	actingArea: string;
	description: string | null;
	address: CreateAddressData;
}

export interface OngDataWithUserId extends OngData {
	userId: number;
}

export type InsertOngData = Omit<OngDataWithUserId, "id" | "createdAt">;

export function excludeOngProperty<CreateOngData, Key extends keyof CreateOngData>(
	ong: CreateOngData,
	...keys: Key[]
): Omit<CreateOngData, Key> {
	const ongData = { ...ong };

	for (const key of keys) {
		delete ongData[key];
	}
	return ongData;
}
