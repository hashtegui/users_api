import { FindUserModel } from "./user/findUseCase/findUser";
import { User } from "./user/user";

export interface IUserRepository {
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    find(user: FindUserModel): Promise<User | null>;
}