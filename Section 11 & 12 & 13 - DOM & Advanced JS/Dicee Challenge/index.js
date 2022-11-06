// Generate random number for left die
var randomNumberOne = Math.floor(Math.random() * 6) + 1

// Change image according to number rolled above
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumberOne + ".png")

// Generate random number for right die
var randomNumberTwo = Math.floor(Math.random() * 6) + 1

// Change image according to number rolled above
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumberTwo + ".png")

// Change heading to indicate which player won
if (randomNumberOne == randomNumberTwo) {
    document.querySelector("h1").textContent = "Draw..."
} else if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins!"
} else {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}
