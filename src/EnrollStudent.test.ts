import EnrollStudent from "./EnrollStudent";

// "Não deve matricular sem um nome de estudante válido"
test('Should not enroll without valid student name', function () {
    const enrollStudent = new EnrollStudent();
    const enrollmentRequest = { student: { name: 'Cesar', cpf: '12345678901' } };
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error('Invalid name'));
});

// "Não deve matricular sem um cpf de estudante válido"
test('Should not enroll without valid student cpf', function () {
    const enrollStudent = new EnrollStudent();
    const enrollmentRequest = { student: { name: 'Cesar Augusto', cpf: '123.456.789-99' } };
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error('Invalid cpf'));
});

// "Não deve matricular um aluno duplicado"
test('Should not enroll duplicated student', function () {
    const enrollStudent = new EnrollStudent();
    const enrollmentRequest = { student: { name: 'Cesar Augusto', cpf: '832.081.519-34' } }; // gerado em geradorcpf.com
    enrollStudent.execute(enrollmentRequest);
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error('Enrollment with duplicated student is not allowed'));
});