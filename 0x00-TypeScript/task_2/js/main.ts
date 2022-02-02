interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return '';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number') {
    return salary < 500 ? new Teacher() : new Director();
  }
  return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// task 5 - test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// task 6 - test
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// task 7 - test|
console.log(teachClass('Math'));
console.log(teachClass('History'));
