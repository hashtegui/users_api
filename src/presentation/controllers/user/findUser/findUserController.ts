import { Request, Response } from "express";
import { UserRepository } from "../../../../domain/models/user/user-repository";

export class FindUserController {
  private readonly userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async handle(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);
      const user = await this.userRepository.find(id);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      } else res.json(user);
    } catch (err: any) {
      console.log(err);
      res.status(500).json({
        message: err.detail,
      });
    }
  }
}
