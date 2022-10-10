import prisma from "../src/config/database";

async function main() {
	await prisma.state.createMany({
		data: [
			{ name: "Acre" },
			{ name: "Alagoas" },
			{ name: "Amapá" },
			{ name: "Amazonas" },
			{ name: "Bahia" },
			{ name: "Ceará" },
			{ name: "Distrito Federal" },
			{ name: "Espírito Santo" },
			{ name: "Goiás" },
			{ name: "Maranhão" },
			{ name: "Mato Grosso" },
			{ name: "Mato Grosso do Sul" },
			{ name: "Minas Gerais" },
			{ name: "Pará" },
			{ name: "Paraíba" },
			{ name: "Paraná" },
			{ name: "Pernambuco" },
			{ name: "Piauí" },
			{ name: "Rio de Janeiro" },
			{ name: "Rio Grande do Norte" },
			{ name: "Rio Grande do Sul" },
			{ name: "Rondônia" },
			{ name: "Roraima" },
			{ name: "Santa Catarina" },
			{ name: "São Paulo" },
			{ name: "Sergipe" },
			{ name: "Tocantins" },
		],
		skipDuplicates: true,
	});

	await prisma.actingArea.createMany({
		data: [
			{ name: "Meio ambiente / Sustentabilidade" },
			{ name: "Fome" },
			{ name: "Violência contra a mulher " },
			{ name: "Assistência Social" },
			{ name: "Criança e Adolescente" },
			{ name: "Cultura" },
			{ name: "Desenvolvimento local" },
			{ name: "Direitos humanos" },
			{ name: "Educação" },
			{ name: "Esporte" },
			{ name: "Geração de renda" },
			{ name: "Saúde" },
			{ name: "Direitos dos Animais" },
			{ name: "Desigualdade racial" },
			{ name: "Combate a pobreza" },
			{ name: "Inclusão de refugiados" },
			{ name: "Direitos indígenas" },
		],
		skipDuplicates: true,
	});

	await prisma.donationNeed.createMany({
		data: [
			{ name: "Alimentos não perecíveis" },
			{ name: "Calçados" },
			{ name: "Doações em dinheiro" },
			{ name: "Produtos de higiene pessoal" },
			{ name: "Produtos de limpeza" },
			{ name: "Roupas (criança, adolescente ou adulto)" },
			{ name: "Roupas de cama" },
			{ name: "Voluntários" },
		],
		skipDuplicates: true,
	});
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
