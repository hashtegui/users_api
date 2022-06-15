import { User } from "../user";

export interface FindUserModel{
    id: number;
    nome: string;
}

export interface FindUser {
    find(user: FindUserModel): Promise<User>;
}