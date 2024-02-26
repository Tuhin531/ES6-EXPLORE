const student = {
    name: 'Tuhin',
    total: 500,
    class: 10,
    marks:
    {
        Physics: 78,
        English: 80,
        math: 90,
        chemistry: 50
    }

}

const result = student.marks.math;
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const nweSubject = student.marks[subject];
const marks2 = student.marks[subject];
console.log(marks2)
// console.log(result);