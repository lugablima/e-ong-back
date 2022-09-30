import "../setup";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserData, CreateUserData, UserResponse, LoginUserData } from "../types/usersTypes";
import * as usersRepository from "../repositories/usersRepository";
import * as errorUtils from "../utils/errorUtils";

export async function findUserByIdOrFail(userId: number) {
	const user: UserData | null = await usersRepository.findById(userId);

	if (!user) {
		throw errorUtils.notFoundError("User not found!");
	}
}

async function findUserByEmail(email: string) {
	const user: UserData | null = await usersRepository.findByEmail(email);

	return user;
}

function encryptPassword(password: string): string {
	const SALT: number = 10;
	const hashedPassword: string = bcrypt.hashSync(password, SALT);

	return hashedPassword;
}

function validatePassword(password: string, encryptedPassword: string) {
	if (!bcrypt.compareSync(password, encryptedPassword)) {
		throw errorUtils.unauthorizedError("Invalid email or password!");
	}
}

function generateToken(userId: number): string {
	const { JWT_SECRET } = process.env as { JWT_SECRET: string };

	const token: string = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "15 days" });

	return token;
}

export async function signUp(userData: CreateUserData) {
	const { name, email, password } = userData;

	const user: UserData | null = await findUserByEmail(email);

	if (user) {
		throw errorUtils.conflictError("This email is already registered!");
	}

	const encryptedPassword: string = encryptPassword(password);

	await usersRepository.insert({ name, email, password: encryptedPassword });
}

export async function signIn(userData: LoginUserData) {
	const { email, password } = userData;

	const user: UserData | null = await findUserByEmail(email);

	if (!user) {
		throw errorUtils.unauthorizedError("Invalid email or password!");
	}

	validatePassword(password, user.password);

	const userResponse: UserResponse = {
		userId: user.id,
		token: generateToken(user.id),
	};

	return userResponse;
}
