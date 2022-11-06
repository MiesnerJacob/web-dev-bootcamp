// Create Fibonacci sequence generator

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  if (n === 0) {
    return None;
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
      fibonacci.push(fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2]);
    }
    return fibonacci
  }
}
