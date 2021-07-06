import CpfValidator from "./CpfValidator";

export default class EnrollStudent {
    private enrolledStudentsRequests: Array<{ student: { name: string, cpf: string } }> = [];

    execute(enrollmentRequest = { student: { name: '', cpf: '' } }) {
        if (!this.isValidStudentName(enrollmentRequest.student.name)) {
            throw new Error('Invalid student name');
        }
        const cpfValidator = new CpfValidator()
        if (!cpfValidator.validateCpf(enrollmentRequest.student.cpf)) {
            throw new Error('Invalid student cpf');
        }
        if (this.isDuplicatedEnrollment(enrollmentRequest)) {
            throw new Error('Enrollment with duplicated student is not allowed');
        }
        this.enrolledStudentsRequests.push(enrollmentRequest);
    }

    private isValidStudentName(name: string) {
        const regexForName = /^([A-Za-z]+ )+([A-Za-z])+$/
        return regexForName.test(name);
    }

    private isDuplicatedEnrollment(enrollmentRequest: any) {
        return this.enrolledStudentsRequests.some(enrolledStudentRequest => enrolledStudentRequest.student.cpf === enrollmentRequest.student.cpf);
    }
}