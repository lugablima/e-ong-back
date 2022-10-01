import { City } from "@prisma/client";

export type CityData = City;

export type CreateCityData = Omit<City, "id" | "createdAt">;
