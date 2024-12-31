import {Student} from "../models/student.js";

export class StudentRepository {
    constructor() {
        this.model = Student;
    }

    create = async (studentData) => {
        try {
            const student = await this.model.create(studentData);
            return student;
        } catch (error) {
            throw new Error(`Failed to create student: ${error.message}`);
        }
    };

    findAll = async () => {
        try {
            const students = await this.model.findAll();
            return students;
        } catch (error) {
            throw new Error(`Failed to fetch students: ${error.message}`);
        }
    };

    findById = async (studentId) => {
        try {
            const student = await this.model.findByPk(studentId);
            if (!student) {
                throw new Error(`Student with ID ${studentId} not found`);
            }
            return student;
        } catch (error) {
            throw new Error(`Failed to find student by ID: ${error.message}`);
        }
    };

    update = async (studentId, updateData) => {
        try {
            const student = await this.model.findByPk(studentId);
            if (!student) {
                throw new Error(`Student with ID ${studentId} not found`);
            }

            await this.model.update(updateData, {where: {studentId}});

            return this.model.findByPk(studentId);
        } catch (error) {
            throw new Error(`Failed to update student: ${error.message}`);
        }
    };

    delete = async (studentId) => {
        try {
            const deleted = await this.model.destroy({where: {studentId}});
            if (!deleted) {
                throw new Error(`Student with ID ${studentId} not found`);
            }
        } catch (error) {
            throw new Error(`Failed to delete student: ${error.message}`);
        }
    };
}
