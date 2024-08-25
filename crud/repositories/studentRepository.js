import { Student } from "../models/student.js";

export class StudentRepository {
  constructor() {
    this.model = Student;
  }

  async create(studentData) {
    try {
      const student = await this.model.create(studentData);
      return student;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async findAll() {
    try {
      const students = await this.model.findAll();
      return students;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async findById(studentId) {
    try {
      const student = await this.model.findByPk(studentId);
      if (!student) {
        throw new Error(`${studentId} not found`);
      }
      return student;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async update(studentId, updateData) {
    try {
      const student = await this.model.findByPk(studentId);
      if (!student) {
        throw new Error(`${studentId} not found`);
      }

      await this.model.update(updateData, { where: { studentId } });

      return this.model.findByPk(studentId);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }

  async delete(studentId) {
    try {
      const deleted = await this.model.destroy({ where: { studentId } });
      if (deleted) {
        return;
      }
      throw new Error(`${studentId} not found`);
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
