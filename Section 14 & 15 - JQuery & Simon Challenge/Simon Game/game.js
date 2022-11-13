// Set game vars
var userClickedPattern = [];
var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var level = 0;
let gameStarted = false;

// Detect Keypress to start game
$(document).keypress(function () {
  console.log(gameStarted);
  if (gameStarted === false) {
    nextSequence();
    gameStarted = true
  }
});

// A fuction for playing audio when one of the buttons gets clicked
function playSound(chosenColor) {

  switch (chosenColor) {
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.autoplay = true;
      audio.play();
      break;

    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.autoplay = true;
      audio.play();
      break;

    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.autoplay = true;
      audio.play();

    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.autoplay = true;
      audio.play();
  }
};

// Function to animate buttons when the get pressed
function animatePress(currentColor) {
  // Show pressed style on button clicks
  $("#" + currentColor).addClass('pressed')

  setTimeout(function() {
      $("#" + currentColor).removeClass('pressed');
  }, 100);
};

// Helper function to check if arrays are identical
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

// Create a function to generate the next Sequence
function nextSequence() {

  // Update Level Number and Header
  level++
  $("h1").text("Level " + String(level))

  // Select random button to add to sequence
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  // Add selection to existing game pattern
  gamePattern.push(randomChosenColor)

  // Animate selected button and play sound
  $(".btn")[randomNumber].animate({
    boxShadow: "0 0 20px white",
    backgroundColor: "grey"
  }, 100);

  playSound(randomChosenColor);
};

// Function to restart the game
function startOver () {
  // Reset All Game vars
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  gameStarted = false;
};

// Add user clicked buttons to the pattern
$(".btn").click(function () {
  userClickedPattern.push($(this).attr('id'));
  animatePress($(this).attr('id'));
  playSound($(this).attr('id'));

  if (gamePattern.length == userClickedPattern.length && arrayEquals(gamePattern, userClickedPattern) == true) {
    userClickedPattern = []
    setTimeout(function () {
      nextSequence();
    }, 1000
  );
} else if (arrayEquals(gamePattern.slice(0, userClickedPattern.length), userClickedPattern) == false) {

    // Reset All Game vars
    startOver();

    // Play Game Over Audio
    var audio = new Audio("sounds/wrong.mp3");
    audio.autoplay = true;
    audio.play();

    // Display Game Over in header
    $("h1").text("GAME OVER, Press A Key to Restart");

    // Game Over animation
    $(document.body).addClass('game-over')
  }

    setTimeout(function () {
      $(document.body).removeClass('game-over')
    }, 100);
});
