import { DataSource } from "typeorm";
require("dotenv").config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  username: "postgres",
  database: "api",
  port: parseInt(process.env.DATABASE_PORT as string),
  entities: [__dirname + "/../domain/models/**/*.ts"],
  logging: false,
  synchronize: true,
});

export const initialize = async () => {
  await AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};
