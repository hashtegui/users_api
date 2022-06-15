import { Router } from "express";
import {
  CreateUserController,
  DeleteUserController,
  FindAllUserController,
  FindUserController,
} from "../../../presentation/controllers/user";

export class UserRoutes {
  private readonly router: Router;
  private readonly findAllUserController: FindAllUserController;
  private readonly findUserController: FindUserController;
  private readonly createUserController: CreateUserController;
  private readonly deleteUserController: DeleteUserController;

  constructor() {
    this.router = Router();
    this.findAllUserController = new FindAllUserController();
    this.findUserController = new FindUserController();
    this.createUserController = new CreateUserController();
    this.deleteUserController = new DeleteUserController();
  }

  public routes(): Router {
    this.router.get("/", async (req, res) => {
      await this.findAllUserController.handle(req, res);
    });

    this.router.get("/:id", async (req, res) => {
      await this.findUserController.handle(req, res);
    });
    this.router.post("/", async (req, res) => {
      await this.createUserController.handle(req, res);
    });

    this.router.delete("/:id", async (req, res) => {
      await this.deleteUserController.handle(req, res);
    })
    const routes = Router();
    routes.use("/user", this.router);

    return routes;
  }
}
