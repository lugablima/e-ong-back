import prisma from "../config/database";
import { OngData, InsertOngData } from "../types/ongsTypes";

export async function insert(ong: InsertOngData) {
	await prisma.ong.create({ data: ong });
}

export async function findById(id: number): Promise<OngData | null> {
	const result: OngData | null = await prisma.ong.findUnique({ where: { id } });

	return result;
}

export async function findByName(name: string): Promise<OngData | null> {
	const result: OngData | null = await prisma.ong.findUnique({ where: { name } });

	return result;
}

export async function findAllByCityId(cityId: number) {
	const ongs = await prisma.ong.findMany({
		where: {
			address: {
				cityId,
			},
		},
		select: {
			id: true,
			name: true,
			userId: true,
			address: {
				select: {
					id: true,
					street: true,
					neighborhood: true,
					number: true,
					complement: true,
					zipCode: true,
					city: {
						select: {
							id: true,
							name: true,
							state: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			},
			actingArea: {
				select: {
					id: true,
					name: true,
				},
			},
			description: true,
			phones: {
				select: {
					id: true,
					number: true,
					description: true,
				},
			},
			socialMedias: {
				select: {
					id: true,
					address: true,
				},
			},
			donationNeedsOngs: {
				select: {
					donationNeed: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
	});

	return ongs;
}
