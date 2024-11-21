function Person(name, age) {
  this.name = name; // Initialize name
  this.age = age;   // Initialize age
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor to initialize name and age
  this.jobTitle = jobTitle;    // Initialize jobTitle
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

