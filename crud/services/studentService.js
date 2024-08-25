import { StudentRepository } from "../repositories/studentRepository.js";

export class StudentService {
  constructor() {
    this.studentRepository = new StudentRepository();
  }

  async createStudent(studentData) {
    try {
      const student = await this.studentRepository.create(studentData);
      return student;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async getAllStudents() {
    try {
      const students = await this.studentRepository.findAll();
      return students;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async getStudentById(studentId) {
    try {
      const student = await this.studentRepository.findById(studentId);
      if (!student) {
        throw new Error(`${studentId} not found`);
      }
      return student;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async updateStudent(studentId, updateData) {
    try {
      const existingStudent = await this.studentRepository.findById(studentId);
      if (!existingStudent) {
        throw new Error(`${studentId} not found`);
      }
      const updatedStudent = await this.studentRepository.update(
        studentId,
        updateData
      );
      return updatedStudent;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async deleteStudent(studentId) {
    try {
      const existingStudent = await this.studentRepository.findById(studentId);
      if (!existingStudent) {
        throw new Error(`${studentId} not found`);
      }
      await this.studentRepository.delete(studentId);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
