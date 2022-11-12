// Show pressed style on button clicks
$('.btn').click(function () {
  $(this).addClass('pressed')

  setTimeout(function() {
    $('.btn').removeClass('pressed');
}, 100);

});

var buttonColors = ["red", "blue", "green", "yellow"];


// Create a function to generate the next Sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber
}
