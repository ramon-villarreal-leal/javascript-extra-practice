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