import Cpf from "./Cpf";
import Student from "./Student";

export default class EnrollStudent {
    private enrollments: any[];

    constructor () {
        this.enrollments = [];
    }

    execute(enrollmentRequest: any) {
        const student = new Student(enrollmentRequest.student.name, enrollmentRequest.student.cpf);
        if (this.isDuplicatedEnrollment(enrollmentRequest)) {
            throw new Error('Enrollment with duplicated student is not allowed');
        }
        const enrollment = {
            student
        };
        this.enrollments.push(enrollment);
        return enrollment;
    }

    private isDuplicatedEnrollment(enrollmentRequest: any) {
        return this.enrollments.some(enrollment => enrollment.student.cpf.value === enrollmentRequest.student.cpf);
    }
}