// Create a dog age to human age converter via browser prompts

function dog_age_to_human_age(dog_age) {
  var humanAge = ((dog_age - 2) * 4) + 21
  return humanAge
}


var dogAge = prompt("How old is your dog in dog years?")

alert(`Your dog is ${dog_age_to_human_age(dogAge)} old in human years.`)
