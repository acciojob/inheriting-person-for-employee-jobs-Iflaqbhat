function Person(name, age) {
  this.name = name; // Initialize name
  this.age = age;   // Initialize age
}

// Add the greet method to Person's prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to initialize name and age
  this.jobTitle = jobTitle;    // Initialize jobTitle
}

// Set up inheritance using Object.create
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the jobGreet method to Employee's prototype
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Example Test Cases
const person = new Person("Alice", 25);
person.greet();
// Expected console output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.greet();
// Expected console output: Hello, my name is Bob, I am 30 years old.
employee.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;


