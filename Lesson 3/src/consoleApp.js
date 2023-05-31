const helloWorldFunction = require("./helloWorld");
const person = helloWorldFunction();
console.log(person);

//Regular Expressions 
//are patterns of test to search for, they start with / and .means to search the full string and include it but not spaces

//Require() Statement
//goes to file specified, reads it and extract everything from that file
//calling the function from another file into your current file so you want work with it there
//basically reads a JavaScript file, executes it, and then proceeds to return the export object. 

//JSON.stringify
//tranform the data to text vis this function when you console log
//console only understands text
//you have to add this to your console.log when you load your code to the cloud because it does not understand JSON and needs to read it as text