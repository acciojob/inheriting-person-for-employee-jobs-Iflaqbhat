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

// Example test cases
const person = new Person("Alice", 25);
person.greet();  // Expected output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // Expected output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
employee.greet();  // Inherited from Person class: Hello, my name is Bob, I am 30 years old.
