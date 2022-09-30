import { Ong } from "@prisma/client";
import { CreateAddressData } from "./addressesTypes";

export type OngData = Ong;

export interface CreateOngData {
	name: string;
	actingArea: string;
	description: string;
	address: CreateAddressData;
}
