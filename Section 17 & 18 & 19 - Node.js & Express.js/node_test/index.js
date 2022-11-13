//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHero = superheroes.random();
var mySuperVillain = supervillains.random();

// Log to console
console.log("Superhero: " + mySuperHero);
console.log("SuperVillain: " + mySuperVillain);
