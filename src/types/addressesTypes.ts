import { Address } from "@prisma/client";

type AddressWithoutCityId = Omit<Address, "id" | "cityId" | "createdAt">;

export interface CreateAddressData extends AddressWithoutCityId {
	city: string;
	state: string;
}
