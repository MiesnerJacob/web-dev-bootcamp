// Input Name to check if it is on the guest list.

var guestList = ['Jacob', 'Anjuli', 'Coco', 'Cleo']

var name = prompt("What is your name?")

if (guestList.includes(name)) {
  alert("You are on the guest list. Welcome!")
} else {
  alert("Sorry, you are not on the guest list.")
}
