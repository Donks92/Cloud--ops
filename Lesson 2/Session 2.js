//Course on programing from Eduardo: https://syllabus.migracode.org/courses/introduction-3/course-content/javascript-i/week-1
//The below file is for notes 

//Expressions and Loops
//EXPRESSIONS
///An expression returns a value. Sometimes we will say that an expression evaluates to a value.

1 + 1; // returns 2
("hello"); // returns "hello"
2 * 4; // returns 8
"Hello" + "World"; // returns "HelloWorld"

//We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement.
// REMEMBER: let and const are variables


//STATEMENT is some code that performs an action
//

// TESTING CODE: You can run node by itself, which will open a node console, also called a Read–Eval–Print Loop (REPL).
//This console allows you to run expressions in the console line by line and is a great way of testing bits of code before writing it in a script.
//To exit the node REPL, you have to click Ctrl+d 

//BOOLEANS
//primative type, line numbers and strings
//either true or false written without quotes

//ASSIGNMENT: Pair up and correct the following function so that the output returns "You've given me a bool, thanks!"

function boolChecker(bool) {
    if ( bool === true ) {
      return "You've given me a bool, thanks!";
    }
  
    else return "No bool, not cool.";
  }
  
  const result = boolChecker(true);
    console.log(result);


  //COMPARISON OPERATORS
  //Using a comparison operator will always return a boolean value; true or false
  //Comparison operators are used in logical statements to determine equality or difference between variables or values.
  //== equal to
  //=== equal value and equal type
  //!= not equal
  //!== not equal value or not equal type
  //> greater than
  //< less than
  //>= greater than or equal to
  //<= less than or equal to

  //CONDITIONALS
  //Like humans, computer programs make decisions based on the information given to them. Conditionals are a way of representing these decisions in code
  //For example:In a game, if the player has 0 lives, then the game is over, In a weather app, if rain is forecast, a picture of rain clouds is shown
  //The most common type of conditional is the if statement. An if statement runs some code if a condition is met. If the condition is not met, then the code will be skipped.
  //An if...else statement runs code when the condition is not met.

let isHappy = true;

if (isHappy) {
  console.log("I am happy");
}

let isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}

//EXERCISE

function moodChecker(mood) {
    if ("happy") {
      return "Good job, you're doing great!";
    } else if ("sad") {
      return "Every cloud has a silver lining";
    } else if (num) {
      return "Beep beep boop";
    } else {
      return "I'm sorry, I'm still learning about feelings!";
    }
  }
  
  const result = moodChecker("happy")
  console.log(result)

  //LOGICAL OPERATORS
  //Logical operators are used to determine the logic between variables or values. They let you write expressions that evaluate to a boolean value.
  //There are three logical operators in JavaScript: || (OR -- (x < 10 && y > 1) is true), && (AND -- (x == 5 || y == 5) is false), ! (NOT -- !(x == y) is true).
  
  let num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}

const result = satisfiesRequirements(5)
  console.log(result)

//EXERCISE

function usernameRequirements(userName, userType) {
    if (
      /^[A-Z].{4,9}$/.test(userName) && 
      (userType === "admin" || userType === "manager")
     ) {
      return "Username Valid";
    }
  
    return "Username Invalid"; 
  }
  
  const result = usernameRequirements("Vicky", "admin")
  console.log(result)

  //REGULAR EXPRESSIONS
  // often abbreviated as regex or regexp, is a sequence of characters that defines a search pattern. 
  //It is a powerful tool used for pattern matching within strings. Regular expressions provide a concise and flexible way to search, match, and manipulate text based on specific patterns.
  // EXAMPLE:  /^[A-Z].{4,9}$/.test(userName)
    //used to test if a string matches a specific pattern. Let's break down the regular expression and understand its components:
    //In JavaScript, regular expressions are defined using forward slashes (/).
    //^ asserts the start of the string.
    //[A-Z] matches a single uppercase letter from A to Z.
    //. matches any character except a newline character.
    //{4,9} specifies the allowed length range for the subsequent characters. In this case, it means there should be between 4 and  characters after the initial uppercase letter.
    //$ asserts the end of the string.
    //when you use the regular expression /^[A-Z].{4,11}$/ with the test() method on a string, such as userName, it checks if the string satisfies all criteria
//Regular Expression Literal Syntax:
        //const regex = /pattern/flags;
    //The regular expression is enclosed within forward slashes (/). The pattern represents the pattern you want to match, and the optional flags specify various options like case sensitivity, global search, and more.
//RegExp Constructor Syntax:
        //const regex = new RegExp("pattern", "flags");
    //The RegExp constructor is an alternative way to create a regular expression. The pattern is passed as a string, and the optional flags are also provided as a string.
//Flags
    //modify the behavior of regular expressions. Some commonly used flags are:
        //i: Case-insensitive matching.
        //g: Global matching (find all matches, not just the first one).
        //m: Multiline matching (treats the input as multiple lines).
//Metacharacters and Special Symbols:
    //Regular expressions utilize metacharacters and special symbols to define patterns. Some commonly used ones include:
        //´.´: Matches any character except newline.
        //´^´: Matches the beginning of a line/string.
        //´$´: Matches the end of a line/string.
        //´[]´: Defines a character set. For example, [a-z] matches any lowercase letter.
        //´|´: Matches either the pattern before or after the pipe symbol.
        //´()´: Creates a capturing group.
//Quantifiers
    //Quantifiers specify how many times a pattern should occur. Some common quantifiers are:
        //´*´: Matches zero or more occurrences.
        //´+´: Matches one or more occurrences.
        //´?´: Matches zero or one occurrence.
        //´{n}´: Matches exactly n occurrences.
        //´|´: Matches either the pattern before or after the pipe symbol.
        //´{n, m}´: Matches between n and m occurrences.

//LOOPS
//JavaScript has two kinds of loops, a while loop and a for loop.
//WHILE LOOP: Programs are very efficient when executing recurring tasks, but now imagine you are asked to log numbers from 1 to 100:

console.log("The count is 1");
console.log("The count is 2");
console.log("The count is 3");
console.log("The count is 4");
console.log("The count is 5");
// ...
console.log("The count is 100");

//Although this would work you would need to write 100 lines of code to achieve the desired output. A better solution for this problem would require that we could execute a block of code multiple times. This form of control is what we call a loop.
//count += 1; indicates at what increment to increase startng at 1 and going to 100

while ( ) { //... }

let count = 1;
while (count <= 100) {
  console.log("The count is: " + count);
  count += 1;
}

//EXERCISE


const apolloCountdownMessage = "all engine running... LIFT-OFF!";
let countdown = 8;
while (countdown > -1) {
    console.log(countdown);
    countdown -= 1;
}
console.log(apolloCountdownMessage);

//FOR LOOP: The for loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like i above), incrementing them by some amount, and checking that they're less than a value.
//to stop an infinte loop click control + C

for (initialization; condition; final-expression) { //... }

    const apolloCountdownMessage = "all engine running... LIFT-OFF!";
    for (let i = 8; i >= 0; i--) {
      console.log(i);
    }
    
    
    console.log(apolloCountdownMessage);

//EXERCISE

function exponentialReturn(i) {
    return i * i;
  }
  
    for (let i = 6; i <= 20; i += 2) {
      const result = exponentialReturn(i);
      console.log(`The exponential of ${i} is: ${result}`);
    }

//ARRAYS
//Arrays are data structures that hold a list of values. We call these values the elements of the array.
//Arrays can hold any type of value (although almost always you only have one data type per array).
//You can access elements in an array using the index of an element with bracket notation
// Remember: All arrays start at position 0! To access the first element in an array, you need to access index 0, the second element at 1, etc. This is called zero-based indexed arrays. 

const mentors = ["Daniel", "Irina", "Rares"];
const testScores = [16, 49, 85];
const grades = ["F", "D", "A"];
const greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];


const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

students[0]; // "Ahmed"
students[3]; // "Nahidul"

//you can add to a list of an array

const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];
students[2] = "Bianca";
console.log(students); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]

//EXERCISE


function secondMatchesAmy(array) {
    if (array[2] = "Amy") {
      return "Second index matched!";
    }
    return "Second index not matched";
  }
  
  const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];
  const results = secondMatchesAmy(students) 
  console.log(results);

//USING FOR LOOPS WITH ARRAYS
//We can use the power of loops to run some code for each element in our array. When we do this say we iterate over an array.

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = 0; i < daysOfWeek.length; i++) {
    const dayMessage = "day is: " + daysOfWeek[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, dayMessage);
  }


//EXERCISE
  
const students = ["Ahmed", "Erin", "Amy", "Nahidul", "Jack"];

for (let i = 0; i < students.length; i++) {
    const studentNameMessage = "The student´s name is: " + students[i];
    console.log(studentNameMessage);
  }

//BUBBLE SORT
//https://humanwhocodes.com/blog/2009/05/26/computer-science-in-javascript-bubble-sort/
//usually the first sorting algorithm taught because it is one of the least efficient and yet easiest to conceptually understand.
//The basic idea is to compare items, two at a time, and make sure that they are in the correct order before moving on to other items. 
//At the end of each pass, a value “bubbles” into the correct position, ultimately leaving only the other items to sort.
//The basic algorithm is as follows:
    //Compare the first item to the second item.
    //If the first item should be after the second item, swap them.
    //Compare the second item to the third item.
    //If the second item should be after the third item, swap them.
    //Continue until the end of the data set is reached.

    function bubbleSort(items){

        var len = items.length,
            i, j, stop;
    
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (items[j] > items[j+1]){
                    swap(items, j, j+1);
                }
            }
        }
    
        return items;
    }


//SWITH
//A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.
//The switch has one or more case blocks and an optional default.
//The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
//If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
//If no case is matched then the default code is executed (if it exists).
//If there is no break then the execution continues with the next case without any checks.

switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
  }

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//Any expression can be a switch/case argument. Both switch and case allow arbitrary expressions.

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

//Grouping of cases

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: 
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}


//GLOSSARY
    //Duplicate: exact copies of something (e.g. two or more files, numbers, directory can be exactly the same)
    //Index: numbers that let you know an item's position inside an array
    //Element: another name for an item in an array
    //Iterate: to repeat some code multiple times, as we do when we use a loop
    //REPL: (Read-Eval-Print-Loop) an interactive way to execute code you write inside the console
    //Zero-based Index: an array starting at 0 and not at 1
    //Algorithm: A set of steps for a computer program to accomplish a task