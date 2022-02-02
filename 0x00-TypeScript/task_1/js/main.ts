interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacherFunction(firstName: string, lastName: string): string {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

interface Student {
  firstName: string;
  lastName: string;
  constructor: Function;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

// task 1 - test
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log('🚀 ~ teacher3', teacher3);

// task 2 - test
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log('🚀 ~ director1', director1);

// task 3 - test
console.log('🚀 ~ printTeacherFunction', printTeacherFunction('Carlos', 'Doe'));

// task 4 - test
const student1: Student = new StudentClass('Carlos', 'Doe');
console.log('🚀 ~ student1', student1.displayName(), student1.workOnHomework());
