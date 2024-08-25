import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import { sequelize } from "./config/database.js";

const app = express();

app.use(express.json());
app.use("/", studentRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Unable to sync database:", err));
