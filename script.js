// Defining the Person class
class Person {
  constructor(name, age) {
    this.name = name; // Initialize name
    this.age = age;   // Initialize age
  }

  // Method to print a greeting
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Defining the Employee class that inherits from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle; // Initialize jobTitle
  }

  // Method to print a job-specific greeting
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Test Case 1: Person instance
const personInstance = new Person("Alice", 25);
personInstance.greet(); 
// Expected console output: Hello, my name is Alice, I am 25 years old.

// Test Case 2: Employee instance
const employeeInstance = new Employee("Bob", 30, "Manager");
employeeInstance.jobGreet(); 
// Expected console output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
