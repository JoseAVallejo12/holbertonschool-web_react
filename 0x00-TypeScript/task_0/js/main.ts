import { createTable, addStyles } from './tables';
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'New York',
};
const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Paris',
};

const studentsList = [student1, student2];

function drawTables(students: Student[]) {
  const body: HTMLBodyElement = document.querySelector('body');
  students.forEach((student) => {
    body.appendChild(createTable(student));
  });
}

addStyles();
drawTables(studentsList);
