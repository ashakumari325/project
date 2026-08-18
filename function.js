// function checkprime(num){
//     let count = 0;
//     for(let i = 1;
//         i <=num;
//         i++){
//             if(num % i == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             console.log(num + "is a prime number");
//         }
//         else{
//             console.log(num + "is not a prime number");
//         }
// }
// let num = Number(prompt("Enter a number"))

// checkprime(num);
// 2
// function checkEven(num){
//     if(num % 2 === 0){
//         console.log(num + "is a Even number");
//     }
//     else{
//         console.log(num + "is an odd number");
//     }
// }
// let inputNum = Number(prompt("Enter a number"));

// checkEven(inputNum);

// 3
// function checkPositive(num) {
//     if (num > 0) {
//         return "positive";
//     }
//     else if (num < 0) {
//         return "Negative";
//     }
//     else{
//         return "Zero";
//     }

// }
// console.log(checkPositive(10));
// console.log(checkPositive(-5));
// console.log(checkPositive(0));

// 4
// function findGreater(a,b){
//     if (a > b) {
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(findGreater(10,20));
// console.log(findGreater(50,15));

// 4
// function checkAge(age) {
//     if (age>= 18) {
//         return "18+ (Adult)";
//     }
//     else{
//         return "Minor"
//     }
// }
//  console.log(checkAge(20));

// 5
// function checkVoting(age) {
//     if (age >= 18) {
//         return "can give vote";
//     }
//     else{
//         return "can not give vote";
//     }
// }
// console.log(checkVoting(20));

// 6
// function checkDivisible(num) {
//     if (num % 5 === 0) {
//         return "5 se Divisible h";
//     }
//     else{
//         return "5 se Divisible nhi h";
//     }
// }
// console.log (checkDivisible(15));
// console.log (checkDivisible(12));
// console.log (checkDivisible(0));

// 7
// function checkLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return '${year} this is Leap Year.';
//     }
//     else{
//         return '${year} thos is not Leap Year.';
//     }
// }
// console.log(checkLeapYear(2024));
// console.log(checkLeapYear(1990));
// console.log(checkLeapYear(2000));



// 8

// function findLargest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(findLargest(10, 25, 15));
// console.log(findLargest(50, 20, 50)); 
// console.log(findLargest(-5, -1, -10)); 

// 9
// function checkCharacter(char) {

//     let lowerChar = char.toLowerCase();
    
//     if ('aeiou'.includes(lowerChar)) {
//         return `${char} Vowel hai.`;
//     } else {
//         return `${char} Consonant hai.`;
//     }
// }

// console.log(checkCharacter('a'));
// console.log(checkCharacter('E')); 
// console.log(checkCharacter('b')); 

// 10

// function checkPassword(Password) {
//     return Password.length >= 8 ;
// }
// let test1 = checkPassword("mypass123");
// console.log(test1);
 
// let test2 = checkPassword("abc");
// console.log(test2);

// let test3 = checkPassword("12345678");
// console.log(test3);

// // 11
// function PrintNumber(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// PrintNumber(5);

// 12
// function PrintEven(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// PrintEven(10);

// 13
// function printOdd(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }
// }
// printOdd(10);

// // 14
// function sumNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }
// let result = sumNumber(5);
// console.log(result);

// // 15
// function multiplyNumbers(n) {
//   let product = 1;
//   for (let i = 1; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }

// let result = multiplyNumbers(5);
// console.log(result);

// 16
// function printTable(n) {
//     for (let i = 1; i = 10; i++) {
//         console.log('${n} x ${i} = ${n * i}');
//     }
// }
// prinTable(5);

