// Person class definition
class Person {
  // Constructor that accepts name and age as parameters
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greet method to print person's introduction
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class definition that inherits from Person
class Employee extends Person {
  // Constructor that accepts name, age, and jobTitle as parameters
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the constructor of the parent class (Person)
    this.jobTitle = jobTitle;
  }

  // jobGreet method to print employee's introduction with job title
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Make Person and Employee globally accessible
window.Person = Person;
window.Employee = Employee;
