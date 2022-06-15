import { Request, Response } from "express";
import { UserRepository } from "../../../../domain/models/user/user-repository";

export class FindAllUserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async handle(req: Request, res: Response) {
    try {
      const users = await this.userRepository.findAll();
      res.json(users);
    } catch (err:any) {
      console.log(err);
      res.status(500).json({
        message: err.detail,
        status: "ERROR",
      });
    }
  }
}
