import express, { Express, Request, Response, Router } from "express";
import { UserRoutes } from "../domain/models/user/user-routes";
import { initialize } from "./data-source";

export class Server {
  private readonly app: Express;
  private readonly port: number;
  private userRoutes: Router;

  constructor(port: number) {
    this.app = express();
    this.app.use(express.json());
    this.userRoutes = new UserRoutes().routes();
    this.app.use("/api", this.userRoutes);
    this.port = port;
  }

  public async listen(): Promise<void> {
    this.app.listen(this.port, async () => {
      await initialize();
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
