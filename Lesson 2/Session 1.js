//Course on programing from Eduardo: https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1
//The below file is for notes 

console.log("Hello world!")

// VARIABLES   
// We can use a variable to create a reference to a value. Variables can be thought of as named containers. 
// You can place data into these containers and then refer to the data simply by naming the container.
// Before you use a variable in a JavaScript program, you must declare it. Variables are declared with let and const keywords as follows.


let greeting = "Hello world"
console.log(greeting);

// STRINGS
//In programming there are different types of data. You've used one data type already: string.
//Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.
//Notice that strings are always wrapped inside of quote marks. We do this so that the computer knows when the string starts and ends.
// You can check that the data is a string by using the typeof operator.


const message = "This is a string";
const messageType = typeof message;
console.log(messageType);

//this doesnt work because you can´t ask for the messageType twice
let colours = "blue, yellow"
const messageType = typeof message;
console.log(messageType);

//STRING CONCAT
//use + to combine two variables
//you can not have spaces in between the lines of code or they will not work

const greetingText = "Hello, my name is ";
const id = "Vicky";
const welcomeMessage = greetingText + id;
console.log(welcomeMessage); 

//STRING INTERPOLATION
// allows you concat + add specific text to the response you get

const greetingStart = "Hello";
const id = "Vicky";
const greeting = `${greetingStart}, my name is ${id}`;
console.log(greeting); // Logs "Hello, my name is Vicky"

//NUMBERS
// The next data type we will learn is number.
//Unlike strings, numbers do not need to be wrapped in quotes.
//You can use mathematical operators to calculate numbers:

const age = 30;
const sum = 10 + 2; // 12
const product = 10 * 2; // 20
const quotient = 10 / 2; // 5
const difference = 10 - 2; // 8

//Numbers assignment
const numberOfStudents = 15
const numberOfProfessors = 8
const sum = numberOfStudents + numberOfProfessors;
console.log(sum); 

// What might help you is to just write out a list of the steps you want to take (what we call pseudo-code), then turn that list into javascript code. 
// let must be all lower case, code is case sensative

//NUMBERS AS DECIMALS
//Numbers can be integers (whole numbers) or floats (numbers with a decimal).
//Numbers with decimals can be rounded to the nearest whole number using the Math.round function

const preciseAge = 30.612437;
const roughAge = Math.round(preciseAge);

//MATH FORMULAS
//Math.round(x)	Returns x rounded to its nearest integer
//Math.ceil(x)	Returns x rounded up to its nearest integer
//Math.floor(x)	Returns x rounded down to its nearest integer
//Math.trunc(x)	Returns the integer part of x (new in ES6)
//Math.pow(x, y) returns the value of x to the power of y:
//Math.sqrt(x) returns the square root of x
//Math.abs(x) returns the absolute (positive) value of x:
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

//Percentages exercise

let mentors = 14;
let students = 26;
let total = 40
const MentorPercentage = (mentors / total).toFixed(2);
console.log(MentorPercentage);
const StudentPercentage = (students / total).toFixed(2);
console.log(StudentPercentage);

//FUNCTIONS
//Functions are blocks of code that can do a task as many times as you ask them to. They take an input and return an output.
//To use a funtion you need to CALL it, you call it by using result = and then the name of the function, here double and in the brackets write the value you want it to apply in the function
//This input given to a function is called a parameter.
//Functions are very powerful.
    //You can write more than one line of code inside of functions.
    //You can use variables inside of functions.
    //You can call other functions inside of functions!

function double(number) {
    return number * 2;
  }

  //single parameter
  const result = double(2);
  console.log(result); 

  //A function can take more than one parameter:
function add(a, b) {
    return a + b;
  }

  //CONSOL.LOG
  //when you are testing your code in the terminal you need to add consol.log to the end of the code so it is executed in the terminal or it will be blank
  // console.log() is used to display or log information to the console during program execution. It is primarily used for debugging purposes, allowing you to inspect values or messages at specific points in your code. console.log() is not typically used to communicate information back to the calling code or the user.
  const result = add(5, 4) 
  console.log(result);


  //Moduel 1 Final Assignment
  //Using consol.log
  function sentence(a, b, c) {
    return a * b * c;
}

const sentenceStart = "My favourite number is ";
const result = sentence(1,2.5,3.8).toFixed(0);
const fullSentence = sentenceStart + result;
console.log(fullSentence); 

// using return
// return is a keyword used within functions to send a value back to the code that called the function. When a return statement is executed within a function, it immediately stops the execution of the function and passes the specified value back to the calling code. The returned value can then be used for further computations, assignments, or other operations.


// NESTED FUNCTIONS

function getAgeInDays(age) {
    return age * 365;
  }

  function createGreeting(ID, age) {
    const ageInDays = getAgeInDays(age);
    const message =
      "My Name is " + ID + " and I was born over " + ageInDays + " days ago!";
    return message;
  }

  const result = getAgeInDays(30);
  const greeting = createGreeting("Vicky", 30);
  console.log(greeting);

  //year of birth given age
  function getYearBorn(age) {
    return 2023 - age;
  }

  const result = getYearBorn(30);
  console.log(result);

//above code + name and sentence

function getYearBorn(age) {
    return 2023 - age;
  }

  function createGreeting(ID, age) {
    const yearBorn = getYearBorn(age);
    const message =
      "My Name is " + ID + " and I was born in the year " + yearBorn;
    return message;
  }

  const result = getYearBorn(30);
  const greeting = createGreeting("Vicky", 30);
  console.log(greeting);


//Glossary
    //Console: a place on your computer to run scripts or commands from
    //Command: something that you type on your computer which performs an operation that your computer does
    //Directory: another word for "folder" on your computer
    //Parameter: a placeholder for values you can pass into functions
    //Primitive type: a built-in type in JavaScript (e.g. strings and numbers are primitive types in JavaScript)
    //Script: a file that contains a program
    //Terminal: another word for "console"
