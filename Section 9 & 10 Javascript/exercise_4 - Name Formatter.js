// Prompt user for their name and return it in title case only using slice and string concatentation

var name = prompt("Type your name here:")
var firstLetter = name.slice(0,1).toUpperCase()
var remainingChars = name.slice(1).toLowerCase()
alert("Hello, " + firstLetter + remainingChars)
