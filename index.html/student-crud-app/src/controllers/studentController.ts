class StudentController {
    private students: Array<{ name: string; fatherName: string; rollNumber: number; class: string }> = [];

    createStudent(name: string, fatherName: string, rollNumber: number, className: string) {
        const newStudent = { name, fatherName, rollNumber, class: className };
        this.students.push(newStudent);
        return newStudent;
    }

    getStudent(rollNumber: number) {
        return this.students.find(student => student.rollNumber === rollNumber);
    }

    updateStudent(rollNumber: number, updatedData: Partial<{ name: string; fatherName: string; class: string }>) {
        const studentIndex = this.students.findIndex(student => student.rollNumber === rollNumber);
        if (studentIndex !== -1) {
            this.students[studentIndex] = { ...this.students[studentIndex], ...updatedData };
            return this.students[studentIndex];
        }
        return null;
    }

    deleteStudent(rollNumber: number) {
        const studentIndex = this.students.findIndex(student => student.rollNumber === rollNumber);
        if (studentIndex !== -1) {
            return this.students.splice(studentIndex, 1)[0];
        }
        return null;
    }
}

export default StudentController;