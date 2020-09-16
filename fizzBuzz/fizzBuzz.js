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
