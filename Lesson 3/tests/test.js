const helloWorldFunction = require("/Users/vedranakulic/Desktop/Cloud ops Class/Lesson 3/src/helloWorld.js");

describe(`GIVEN we coded the helloWorld function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'hello world'`, () => {
      const person = helloWorldFunction();
      expect(person.age).toBe(34);
    });
  });
});


// npm run tst 
  //to run all *test.js files

//("../src/helloWorld");
  //.. means go one folder up and then /and name fo the folder
  //. means in the same folder
  //... means go two folders up
  // a / means go inside the folder
  //if your right click on the file and copy Path you can copy it into the brackets
  // if you copy the full path and share it with someone it won´t work for them because it´s specific to their computer

//Quotation Marks
  //single vs double

//expect(response.age).toBe(24)
  //in the bracket you look to const person then you look for the variable / data point in the array after the . specificed
  //used to test code 

//JEST
  //A QA/testing framework you can use to quickly run testing without manually building it
  //in the folder called package.json is where you are telling your file to pull the code from there so that it works as written above
  //these files do not support comments, so note for that file is ^ means at least this version, or higher
  //jest as a command does not work, you must add SCRIPT code to execute npm run tst instead to run the jest test

//NPM
  //Node package manager
  //it id node for packages
  //the first time you run it you need to write npm install

//CD
  //a code to be run in terminal to Change Directory

//ACCEPTANCE CRITERIA
  //as a PM, we write this and give it to the developers
  //this acceptance criteria should be aligned to the user stories and should be written as GIVEN .. WHEN .. THEN
  //these are then build into QA tests


