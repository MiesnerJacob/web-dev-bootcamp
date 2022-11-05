// Create a function to tell you how many bottles of milk you can buy
// Apply this function to our code with instructions for our robot


function getMilk(money) {
  numBottlesMilk = Math.floor(money / 1.5);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + numBottlesMilk + " bottles of milk.")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

// Give the robot 10 dollars to go buy milk
getMilk(10);
