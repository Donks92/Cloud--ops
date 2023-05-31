//Course on programing from Eduardo: https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1
//The below file is for notes 

//ARRAY PROPERTIES
//arrays, like strings, have a lenght property
//You can get a single value out of an array using bracket notation.
//The number inside of the brackets is called an index. Index just means the position of the item within the array.
//You can also set a value using bracket notation and an assignment operator (=).

$ node
> let ingredients = ["Flour", "Water", "Salt"];
undefined
> arr
[1, 2, 3]
> arr.length
3
> ingredients[0]
Flour
> ingredients[1]
Water
> ingredients.length
3


const scores = [80, 41, 47];

scores[2] = 29; // Change the last score
scores[3] = 51; // Add a new score

//EXERCISE

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
students [0] = "Vicky"
students [5] =  "New"
console.log(students)
console.log(students.length)

//ARRAY METHODS
//.sort(): An array method that sorts the values in an array into ascending alphabetical or numerical order.

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.sort();
console.log(students)

//.concat(): Adds (or concatenates) another value or array to the array.

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.concat("Vicky");
console.log(orderList)

//.slice(): Returns a slice of the array. You can tell .slice() where you want the slice to begin and end by passing it two parameters.

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.slice(0,2);
console.log(orderList)

//.includes(): Returns true if a value is in the array.

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.includes("Vicky");
console.log(orderList)

//.join(): Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma ,. If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.join("--");
console.log(orderList)

const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const orderList = students.join();
console.log(orderList)

//EXERCISE
//A
const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
const mentors = ["John", "Jack", "Joe", "Jill", "Jan"];
const newList = students.concat(mentors);
console.log(newList.sort())
//B
//! is the logical not operator, so it says if ID is NOT in the array, then...
function newString(ID, array) {
    if (!array.includes(ID))  {
    return `${ID} is not in the class with ${array.join(", ")}`;
    }
    else {
        return `${ID} is in the class with ${array.join(", ")}`;
    }
}

const names = ["John", "Alice", "Bob"];
console.log(newString("Alice", names));
console.log(newString("Charlie", names));

//ARRAY MAP
//.map(): Runs every item in the array through a function and returns a new array with the values returned by the function.
//.trim(): to remove empty spaces
//.toLowerCase() to make things lower case

function double(number) {
    return number * 2;
  }
  
  const numbers = [1, 2, 3];
  const numbersDoubled = numbers.map(double);

  //Callback Function
  //if you only need a function once you can enter it directly in the call you are making
  //=> is a new way of declating a function in java called arrow functions, it shortens the function to remove function and the name. You also do not need the curly brackets or to write return; implicit return

const numbers = [1, 2, 3];
const numbersDoubled = numbers.map((number) => number * 2);

//EXERCISE


function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput =  yourFunc(namesArray.map((name) => name.toUpperCase()));
  return magicOutput;
}

function transformToMagic(array) {
  return array;
}

const magicOutput = magician(transformToMagic);
console.log(magicOutput.sort());

//ARRAY FOR EACH
//.forEach(): similar to map, but does not return a new array

const names = ["Daniel", "mozafar", "irina"];

function consoleLog(name, index) {
    console.log(index + ": " + name);
  };
  
names.forEach(consoleLog);

  const result = names.join(", ");
  console.log(result);

//EXERCISE 
//A
//to apply .map and .forEach you need to do it opposite to normal, instead of function(variables being called) it is variables being called.map(function)

function age(birthYear) {
  return 2023 - birthYear;
} ;

const array = [1964, 2008, 1999, 2005, 1978, 1985, 1919]; 
const result = array.map(age);
console.log(result);

//B
function yearsUntilLicense(yearOfBirth) {
  return 17 - (2023 - yearOfBirth);
}

function drivingPrivledge(birthYear) { 
      const yearsUntil = yearsUntilLicense(birthYear)

  if (2023 - birthYear >= 17) {
      return `Born in ${birthYear} can drive` ;
      }
      return `Born in ${birthYear} can drive in ${yearsUntil} years` ;
  }

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const result = birthYears.map(drivingPrivledge);
console.log(result);

//ARRAY FILTER
//imagine you have an array of student´s test scores, you want to show only the test scrores higher than 80%

const testScores = [90, 50, 100, 66, 25, 80, 81];
function isHighScore(score) {
  return score > 80;
}

//easier way - .filter(): Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition.
//the sort() method without any arguments will sort the elements of an array as strings in lexicographic (dictionary) order. 
//To sort numeric values correctly, you need to pass a comparison function to the sort() method. 
//comparison function: (a, b) => a - b

const testScores = [90, 50, 100, 66, 25, 80, 81];

function isHighScore(score) {
  return score > 80;
}
const highTestScores = testScores.filter(isHighScore);
console.log(highTestScores.sort((a, b) => a - b));

//EXERCISE

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]; 

function drivingPrivledge(birthYear) { 
  if (2023 - birthYear >= 17) {
    return birthYears ;
    }
}

const result = birthYears.filter(drivingPrivledge);
console.log(`These are the birth years of people who can drive: ${result}`);

//ARRAY FIND
//Imagine you have an array of names, How would you find the first name that's longer than 6 characters?
//You can write a predicate function that checks if a string is longer than 6 characters

const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function isLongName(name) {
  return name.length > 6;
}

//easier: .find(): Searches through the array and returns the value of the first item that satisfies a predicate function.

const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function isLongName(name) {
  return name.length > 6;
}

const longName = names.find(isLongName);
console.log(longName); 

//EXERCISE

const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function myName(name) {
  if (name.includes("Vicky")) {
    return "Found me!";
  }
    return "Haven´t found me :("
}

const result = myName(names);
console.log(result);

//CHAINING
//Notice how we were able to write one method after another e.g. names.map(formatName).forEach(log)? This is called method chaining.
//You can call .forEach() after .map() because .map() returns a new array.
//Be careful though! You can not call .map() after .forEach.

function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
  console.log(index + ": " + name);
}

const namesFormatted = names.map(formatName);
namesFormatted.forEach(log);

//easier
//the expression name.split("")[0] splits the name string into an array of individual characters, and [0] accesses the first element of that array.
//Here's how it works:
  //name.split("") splits the name string into an array of characters. For example, if name is "John", it will become ["J", "o", "h", "n"].
  //[0] accesses the first element of the resulting array. In our example, it will be "J", which is a string.
//So, name.split("")[0] returns the first character of the name string.

function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
  console.log(index + ": " + name);
}

const namesFormatted = names.map(formatName).forEach(log);

//EXERCISE
//.filter(+function): used to remove all non-string elements with typeof operator

const array = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

function formatName(name) {
  const filteredArray = name.filter((entry) => typeof entry === "string");
  const formattedArray = filteredArray.map((entry) => entry.toUpperCase () + "!");
  return formattedArray;
}

const result = formatName(array);
console.log(result);






