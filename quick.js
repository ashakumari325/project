//1 loops question

//  for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2
// let sum = 0;
//  for (let i = 1; i <= 10; i++) {
//     sum = sum + i;

//  }
//  console.log(sum);

// 3 if else question

// let num = 10;

// if (num % 2== 0) {
//     console.log("even")
// }
// else {
//     console.log("odd")
// }

// // 4
// let num = 7;
// if (num % 2== 0) {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// 5

// let a = 20;
// let b = 30;

// if (a > b) {
//     console.log(a);
// }
// else{
//     console.log(b)
// }

// 6

// let a = 10;
// let b = 25;
// let c = 15;

// if(a > b && a > c) {
//     console.log(a);
// }
// else if(b > a && b > c) {
//     console.log(b);
// }
// else{
//     console.log(c)
// }

// 7

// let a = 5;
// let b = 25;
// let c = 20;

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// }
// else{
//     console.log(c)
// }

// 8

// let marks = 40;

// if (marks >= 40){
//     console.log("pass")
// }
// else {
//     console.log("fail")
// }

// 9 function question

// function greet(name) {
//     console.log("hello " + name);

// }
// greet("asha");

// 10
//  function isEven (num) {
//     if (num % 2 === 0) {
//         console.log("Even")
//     }
//     else{
//         console.log("odd")
//     }
//  }
//  isEven(8);

// 11
//  function add(a, b) {
//     return a + b;
//  }
//  console.log(add(10,20));

// 12
// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// 13

function sumNumbers(n) {
    let sum = 0;

    for (let i =1; i <=n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumNumbers(5));