// Create a love calculator, allow users to input two names and return to them a percent between 0 and 100.

// Collect Names
var nameOne = prompt("Enter name #1");
var nameTwo = prompt("Enter name #2");

// Generate psuedo-random percentage between 0 and 100
var match = Math.floor((Math.random() * 100));

// Return match score for two names
if (match > 80) {
  alert(`The love score for ${nameOne} and ${nameTwo} is ${match}%. You are almost a perfect match.`);
} else if (match > 50 && match <= 50) {
  alert(`The love score for ${nameOne} and ${nameTwo} is ${match}%. You are a decent fit.`);
} else {
  alert(`The love score for ${nameOne} and ${nameTwo} is ${match}%. You probably hate eachother.`);
}
