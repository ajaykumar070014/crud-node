import express from "express";
import { StudentController } from "../controllers/studentController.js";

const router = express.Router();
const studentController = new StudentController();

router.post(
  "/students",
  studentController.createStudent.bind(studentController)
);
router.get(
  "/students",
  studentController.getAllStudents.bind(studentController)
);
router.get(
  "/students/:studentId",
  studentController.getStudentById.bind(studentController)
);
router.put(
  "/students/:studentId",
  studentController.updateStudent.bind(studentController)
);
router.delete(
  "/students/:studentId",
  studentController.deleteStudent.bind(studentController)
);

export default router;
