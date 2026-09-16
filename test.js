// let n = +prompt ("enter the number")
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 2
// let i = 1 +prompt ("enter the number")
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 4
// let num = Number(prompt("Enter a number:"));
// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         count++;
//     }
// }

// if (count === 2) {
//     console.log("Prime");
// }
// else {
//     console.log("Not a Prime");
// }

//6
// let age = prompt("Enter your age:");

// if (age < 13) {
//     console.log("Child");
// }
// else if (age <= 19) {
//     console.log("Teenager");
// }
// else if (age <= 59) {
//     console.log("Adult");
// }
// else {
//     console.log("Senior Citizen");
// }


// 7 
// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let c = Number(prompt("Enter third number:"));

// if (a >= b && a >= c) {
//     console.log("Largest number is:", a);
// }
// else if (b >= a && b >= c) {
//     console.log("Largest number is:", b);
// }
// else {
//     console.log("Largest number is:", c);
// }

// 8

// let year = Number(prompt("Enter a year:"));

// if (year % 400 === 0) {
//     console.log("Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log("Not a Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }

// 11
// function greet(name) {
//     console.log ("hello " + name + ",welcome to javascript") ;
// }
// greet("sagar");

// 14
function isPrime(num) {
    let count = 0;

    for (let i = 1; i <= num; i++);
    if (num % i === 0) {
        count++;
    }
}
 if (count === 2) {
    console.log("prime")
 }
 else{
    console.log("not prime")
 }
