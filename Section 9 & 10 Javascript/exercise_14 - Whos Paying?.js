// Build a function to take an array of names as an input and return a random name from the array. Give all names an equal probability of being chosen.

function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    var index = Math.round(Math.random() * (names.length + 1))
    return `${names[index]} is going to buy lunch today!`
/******Don't change the code below*******/
}
