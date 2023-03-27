var numbers = [3, 56, 2, 48, 5];

console.log("Numbers array");
console.log(numbers);
console.log("\n");

//Map -Create a new array by doing something with each item in an array.
const doubleNumbers = numbers.map(function(x) {
    return x * 2
});

console.log("Double Numbers array");
console.log(doubleNumbers);
console.log("\n");

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function(x) {
    return x < 10   
});

console.log("Numbers less than ten array");
console.log(filterNumbers);
console.log("\n");

//Reduce - Accumulate a value by doing something to each item in an array.
const accumulatedNumbers = numbers.reduce(function(accumulator, currentValue)  {
  return accumulator += currentValue  
});

console.log("Cumulative sum of array");
console.log(accumulatedNumbers);
console.log("\n");

//Find - find the first item that matches from an array.
const foundNumber = numbers.find(function(x) {
    return x > 10
});

console.log("First number in list greater than ten");
console.log(foundNumber);
console.log("\n");


//FindIndex - find the index of the first item that matches.
const foundIndex = numbers.findIndex(function(x) {
    return x > 10
});

console.log("Index of first number in list greater than ten");
console.log(foundIndex);
console.log("\n");

// Use map to create an array of the emojipedia meanings truncated to the first 100 chars
const emojipedia = require("./emojipedia.js");


const truncatedMeanings = emojipedia.map(function(x) {
    return x.meaning.substring(0,99)
});

console.log("Truncated emojipedia meanings");
console.log(truncatedMeanings);
console.log("\n");

