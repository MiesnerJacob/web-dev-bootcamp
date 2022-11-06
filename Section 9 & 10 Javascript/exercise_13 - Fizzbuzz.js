// Create functon that loops through 0-100 printing out "Fizz" when the number is divisible by 3, "Buzz" when the number is divisible by 5, and "FizzBuzz" when it is divisible by both.

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 == 0) {
      output.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output.push("Fizz")
    } else if (count % 5 == 0) {
      output.push("Buzz")
    } else {
      output.push(count)
    }
    console.log(output)
    count++
  }
}
