import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { v4 as uuidv4 } from "uuid";

export const Student = sequelize.define("Student", {
  studentId: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  className: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
