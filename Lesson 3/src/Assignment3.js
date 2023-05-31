// **Level up** ASSIGMENT
//Create a function called _processNumbers_ that receives a JSON object with one property _numbers_ as array of integers and 
//returns an object containing the maximum number and the total sum.

//const maxNumber = Math.max(...numbers);
  //the spread operator (...) is used to spread out the numbers array elements as individual arguments to the Math.max() function. 
  //The Math.max() function returns the maximum value among the arguments provided. The maximum value is then assigned to the variable maxNumber. This line essentially finds the maximum number in the numbers array.

//const sum = numbers.reduce((acc, num) => acc + num, 0);
  //numbers.reduce: The reduce() method is called on the numbers array. It is a higher-order function that iterates over each element of the array and performs a specified operation, in this case, calculating the sum.
  //.sum((acc, num) => acc + num, 0): This is the callback function passed to the reduce() method. 
  //It takes two parameters: acc and num. 
  //acc stands for "accumulator" and represents the running total of the sum. 
  //num represents the current number being processed in the iteration.
  //The , 0 at the end is the initial value of the accumulator (acc). In this case, it starts at 0, meaning the sum calculation begins with a value of 0.

function processNumbers(numbers) {
  
  const maxNumber = Math.max(...numbers);
  const sum = numbers.reduce((accsum, num) => accsum + num, 0);
  
  return {
  max: maxNumber,
  sum: sum
  };
}

const result = processNumbers([1,2,3]);
console.log(result);

module.exports = processNumbers;