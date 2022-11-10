// Get num of drum buttons on the page
var numDrumButtons = document.querySelectorAll('.drum').length;

// Loop through all the buttoms and add an event listener for clicks
for (var i = 0; i < numDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;
        playAudio(buttonInnerHtml);
        buttonAnimate(buttonInnerHtml.toLowerCase());

  });
}

// Add event listener for when a button on the keyboard is pressed
document.addEventListener("keydown", function (event) {
  playAudio(event.key.toUpperCase());
  buttonAnimate(event.key);
});


function playAudio (char) {
  switch (char) {
    case "W":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "A":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "S":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "D":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "J":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "K":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "L":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

  default: console.log(char)
  }
}


// Animate buttons on click
function buttonAnimate(currentKey) {
  var activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("pressed")

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100)
}
