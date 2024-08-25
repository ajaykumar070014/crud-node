import { StudentService } from "../services/studentService.js";

export class StudentController {
  constructor() {
    this.studentService = new StudentService();
  }
  async createStudent(req, res) {
    try {
      const student = await this.studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllStudents(req, res) {
    try {
      const students = await this.studentService.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getStudentById(req, res) {
    try {
      const student = await this.studentService.getStudentById(
        req.params.studentId
      );
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateStudent(req, res) {
    try {
      const student = await this.studentService.updateStudent(
        req.params.studentId,
        req.body
      );
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteStudent(req, res) {
    try {
      const studentId = req.params.studentId;
      await this.studentService.deleteStudent(studentId);
      res.status(200).json({ message: "Student deleted" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
