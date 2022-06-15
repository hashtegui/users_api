import { Repository } from "typeorm";
import { AppDataSource } from "../../../config/data-source";
import { IUserRepository } from "../IUserRepository";
import { FindUserModel } from "./findUseCase/findUser";
import { User } from "./user";

export class UserRepository {
  private userRepository: Repository<User>;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  async find(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id: id } });
  }
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
