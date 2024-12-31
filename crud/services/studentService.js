import {StudentRepository} from "../repositories/studentRepository.js";

export class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }

    createStudent = async (studentData) => {
        try {
            const student = await this.studentRepository.create(studentData);
            return student;
        } catch (error) {
            throw new Error(`Failed to create student: ${error.message}`);
        }
    };

    getAllStudents = async () => {
        try {
            const students = await this.studentRepository.findAll();
            return students;
        } catch (error) {
            throw new Error(`Failed to fetch students: ${error.message}`);
        }
    };

    getStudentById = async (studentId) => {
        try {
            const student = await this.studentRepository.findById(studentId);
            if (!student) {
                throw new Error(`Student with ID ${studentId} not found`);
            }
            return student;
        } catch (error) {
            throw new Error(`Failed to get student by ID: ${error.message}`);
        }
    };

    updateStudent = async (studentId, updateData) => {
        try {
            const existingStudent = await this.studentRepository.findById(studentId);
            if (!existingStudent) {
                throw new Error(`Student with ID ${studentId} not found`);
            }
            const updatedStudent = await this.studentRepository.update(studentId, updateData);
            return updatedStudent;
        } catch (error) {
            throw new Error(`Failed to update student: ${error.message}`);
        }
    };

    deleteStudent = async (studentId) => {
        try {
            const existingStudent = await this.studentRepository.findById(studentId);
            if (!existingStudent) {
                throw new Error(`Student with ID ${studentId} not found`);
            }
            await this.studentRepository.delete(studentId);
            return {message: "Student successfully deleted"};  // Return success message after deletion
        } catch (error) {
            throw new Error(`Failed to delete student: ${error.message}`);
        }
    };
}
