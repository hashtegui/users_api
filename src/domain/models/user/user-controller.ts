import { UserRepository } from "./user-repository";
import { Request, Response } from "express";

export class UserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async handle(req: Request, res: Response) {
    try {
      const user = await this.userRepository.create(req.body);
      res.json(user);
    } catch (err: any) {
      console.log(err);
      res.status(500).json({
        message: err.detail,
        status: "ERROR",
      });
    }
  }
}
