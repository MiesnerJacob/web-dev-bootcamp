// Change text of html element
// $("button").text('hello')

// Change css of html element
// $("button").css('background', 'red')

// Change title text according to keypress
$(document).keypress(function (event) {
  $("h1").text(event.key)
});

// Change color of headline on mouseover and mouseleave event
$("h1").on("mouseover", function () {
  $("h1").css("color", "red")
});

$("h1").on("mouseleave", function () {
  $("h1").css("color", "blue")
});


// Change the css of title on button click
$("button").click(function (event) {
  $("h1").css("color", event.target.innerText.toLowerCase());
});

// Add in new html page elements with JQuery
// $("h1").before("<button>Hello</button>");
// $("h1").after("<button>Hello</button>");
// $("h1").prepend("<button>Hello</button>");
// $("h1").append("<button>Hello</button>");


// Remove html page elements using JQuery
// $("button").remove();


// Hide, fade, slide html page element using JQuery
// $("button").click(function () {
//   $("h1").hide();
// });

// $("button").click(function () {
//   $("h1").fadeOut();
// });

// $("button").click(function () {
//   $("h1").slideUp();
// });


// Show, fade, slide html page element using JQuery
// $("button").click(function () {
//   $("h1").show();
// });

// $("button").click(function () {
//   $("h1").fadeIn();
// });

// $("button").click(function () {
//   $("h1").slideDown();
// });


// Toggle, fade, slide html page element using JQuery
// $("button").click(function () {
//   $("h1").toggle();
// });

// $("button").click(function () {
//   $("h1").fadeToggle();
// });

// $("button").click(function () {
//   $("h1").slideToggle();
// });


// Animate an html page element (only works on numeric values)
// $("button").click(function () {
//   $("h1").animate({
//     opacity: '50%'
//   });
// });


// Chain JQuery Methods
$("button").click(function () {
  $("h1").slideUp().slideDown().animate({
    opacity: '50%'
  });
});
