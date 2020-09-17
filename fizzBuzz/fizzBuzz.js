"use strict";

var i;
// fizz buzz for practice
for(i = 1; i <= 100; i++) {
 if(i % 5 === 0 && i % 3 === 0) {
  console.log("FizzBuzz");
 } else if(i % 5 === 0) {
  console.log("Fizz")
 } else if(i % 3 === 0) {
  console.log("Buzz")
 } else {
  console.log(i);
 }
}

//basic for loop
for(i = 1; i<=10; i++) {
 console.log(i);
}

//function
const num = 3;

function multiplyBy2 (inputNumber) {
 const result = inputNumber*2;
 return result;
}

const output = multiplyBy2(num)
const newOutput = multiplyBy2(10);

//Hey you cool cats and kittens....
//Array stuff
var myCatFriends = ['Dany', 'Tubbzy', 'Lucky', 'Sunshine'];

myCatFriends.length

myCatFriends.push('super cool cat')

myCatFriends

// array practice

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

console.log('There are ' + shapes.length + ' shapes in the array');

console.log('The first shape is: ' + shapes[0]);
// The first shape is: square

console.log('The second shape is: ' + shapes[1]);
// The second shape is: rectangle

console.log('The third shape is: ' + shapes[2]);
// The third shape is: circle

console.log('The fourth shape is: ' + shapes[3]);
// The fourth shape is: triangle

console.log('The fifth shape is: ' + shapes[4]);
// The fifth shape is: undefined
