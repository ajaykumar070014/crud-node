import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("PersonalDB", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});

