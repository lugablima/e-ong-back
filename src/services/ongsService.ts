import { State, ActingArea } from "@prisma/client";
import { OngData, CreateOngData, excludeOngProperty } from "../types/ongsTypes";
import { CityData } from "../types/citiesTypes";
import { AddressData, CreateAddressData, excludeAddressProperty } from "../types/addressesTypes";
import * as ongsRepository from "../repositories/ongsRepository";
import * as citiesRepository from "../repositories/citiesRepository";
import * as statesRepository from "../repositories/statesRepository";
import * as addressesRepository from "../repositories/addressesRepository";
import * as actingAreasRepository from "../repositories/actingAreasRepository";
import { signUp } from "./usersService";
import * as errorUtils from "../utils/errorUtils";
import { UserData } from "../types/usersTypes";

async function checksIfTheStateExists(stateName: string): Promise<State> {
	const state: State | null = await statesRepository.findByName(stateName);

	if (!state) {
		throw errorUtils.notFoundError("State not found!");
	}

	return state;
}

async function checksIfTheCityExistsOrCreate(cityName: string, stateId: number): Promise<CityData> {
	let city: CityData | null = await citiesRepository.findByNameAndStateId(cityName, stateId);

	if (!city) {
		city = await citiesRepository.insert({ name: cityName, stateId });
	}

	return city;
}

async function createAddress(address: CreateAddressData): Promise<AddressData> {
	const { id: stateId }: State = await checksIfTheStateExists(address.state);

	const { id: cityId }: CityData = await checksIfTheCityExistsOrCreate(address.city, stateId);

	const addressData = excludeAddressProperty(address, "city", "state");

	const createdAddress: AddressData = await addressesRepository.insert({ ...addressData, cityId });

	return createdAddress;
}

async function checksIfTheOngNameAlreadyExists(ongName: string) {
	const ong: OngData | null = await ongsRepository.findByName(ongName);

	if (ong) {
		throw errorUtils.conflictError("This ONG name already exists!");
	}
}

async function checksIfTheActingAreaExistsOrCreate(actingArea: string): Promise<ActingArea> {
	let area: ActingArea | null = await actingAreasRepository.findByName(actingArea);

	if (!area) {
		area = await actingAreasRepository.insert(actingArea);
	}

	return area;
}

export async function create(ong: CreateOngData) {
	await checksIfTheOngNameAlreadyExists(ong.name);

	const { id: userId }: UserData = await signUp({ name: ong.name, email: ong.email, password: ong.password });

	const { id: addressId }: AddressData = await createAddress(ong.address);

	const { id: actingAreaId }: ActingArea = await checksIfTheActingAreaExistsOrCreate(ong.actingArea);

	const insertOng = excludeOngProperty(ong, "email", "password", "actingArea", "address");

	await ongsRepository.insert({ ...insertOng, userId, addressId, actingAreaId });
}

async function checksIfTheCityExistsOrFail(cityName: string) {
	const city: CityData | null = await citiesRepository.findByName(cityName);

	if (!city) {
		throw errorUtils.notFoundError("City not found!");
	}

	return city;
}

export async function get(cityName: string) {
	const city = await checksIfTheCityExistsOrFail(cityName);

	const ongs = await ongsRepository.findAllByCityId(city.id);

	return ongs;
}
