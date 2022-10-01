import { Address } from "@prisma/client";

export type AddressData = Address;

type AddressWithoutCityId = Omit<Address, "id" | "cityId" | "createdAt">;

export interface CreateAddressData extends AddressWithoutCityId {
	city: string;
	state: string;
}

export type InsertAddressData = Omit<Address, "id" | "createdAt">;

export function excludeAddressProperty<CreateAddressData, Key extends keyof CreateAddressData>(
	address: CreateAddressData,
	...keys: Key[]
): Omit<CreateAddressData, Key> {
	const addressData = { ...address };

	for (const key of keys) {
		delete addressData[key];
	}
	return addressData;
}
