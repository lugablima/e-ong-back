import { InsertAddressData, AddressData } from "../types/addressesTypes";
import prisma from "../config/database";

export async function insert(addressData: InsertAddressData): Promise<AddressData> {
	const address: AddressData = await prisma.address.create({ data: addressData });

	return address;
}

export async function findOngsByCityId() {
	//
}
