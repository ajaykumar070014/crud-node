import express from "express";
import {StudentController} from "../controllers/studentController.js";

const router = express.Router();
const studentController = new StudentController();

router.post("/students", studentController.createStudent);

router.get("/students", studentController.getAllStudents);

router.get("/students/:studentId", studentController.getStudentById);

router.put("/students/:studentId", studentController.updateStudent);

router.delete("/students/:studentId", studentController.deleteStudent);

export default router;
