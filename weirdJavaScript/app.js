
// Global means not inside a function...


// b();
// console.log(a);
//a is undefined
//Hoisting in progress here
//set up memory space for variables and functions
//all variables in JavaScript are initially set to undefined!
// var a = "Hello World!";
//
// function b() {
//     console.log("Called B!");
// }

//undefined is a value that takes up memory space
//never set value to undefined
// undefined is I never set this value
//value that variables receive during the creation phase
// var a;
// console.log(a);
//
// if(a === undefined) {
//     console.log("a is undefined")
// } else {
//     console.log("a is defined")
// }
// function b() {
//
// }
//
// function a() {
//     b();
// }
//
// a();
//reads from the bottom up because of being dynamic
// function b() {
//     var myVar;
//     console.log(myVar)
// }
//
// function a() {
//     var myVar = 2;
//     console.log(myVar);
//     b();
// }

// var myVar = 1;
// //1
// console.log(myVar)
// //2, undefined
// a();
// //1
// console.log(myVar)
// //undefined
// b();
//understanding functions, contexts and variable environments

function b() {

    console.log(myVar)
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
