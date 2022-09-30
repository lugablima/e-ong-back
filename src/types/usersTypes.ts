import { User } from "@prisma/client";

export type UserData = User;

export type CreateUserData = Omit<User, "id" | "createdAt">;

export type LoginUserData = Omit<User, "id" | "name" | "createdAt">;

export interface UserToken {
	token: string;
}
