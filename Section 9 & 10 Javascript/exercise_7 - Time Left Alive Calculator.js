// Make a function to tell someone how many days, weeks, and months they would have to live given their age and assuming they will die at 90 years old.

function lifeInWeeks(age) {

/************Don't change the code above************/

    //Write your code here.
    if (age > 90) {
        console.log("You're already dead.")
    }
    var years = 90 - age
    var days = years * 365
    var weeks = years * 52
    var months = years * 12
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)

/*************Don't change the code below**********/
}
