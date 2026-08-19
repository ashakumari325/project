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

// 17

// function countEven(n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0)
//             count++
//     }
//     return count;
// }
// console.log(countEven(7));

// 18

// function countOdd(n) {
//     let count = 1;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0)
//             count++;
//     }
//     return count;
// }

// console.log(countOdd(5));
// console.log(countOdd(10));

// 19

// function countEven(n) {
//     let sum = 0 ; 
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(countEven(5));
// console.log(countEven(10));

// 20

// function sumOdd(num) {
//     let sum = 0 ;
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 !== 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOdd(5));
// console.log(sumOdd(10));

// 21

// function factorial(n) {
//     if (n < 0) {
//         return "Negative numbers dont have factorial"
//     }
//     else if(n === 0 || n === 1) {
//         return 1;
//     } 
//     else{
//         let result = 1; 
//         for (let i = 1; i <= n; i++) {
//             result *= i ;
//         }
//         return  result;
//     }

//     }
//     console.log(factorial(5));
//     console.log(factorial(0));
//     console.log(factorial(-3));
// 22
// function reversenumber (n){
//     let reverse = 0;
//     for(let i = 1; i <= n; i++){
//         let digit = n % 10
//         reverse = reverse * 10 + digit;
//         n = Math.floor(n / 10)
//     }
//     console.log(reverse)
// }
// reversenumber(345)

// // 23
// function countdigit (n){
//     let count = 0;
//    while(n > 0){
//             count++
//             n = Math.floor(n / 10)
//         }
//           console.log(count)
//     }
  
// countdigit(456788)

// 24
// function sumdigit(n){
//     let sum = 0;
//     while(n > 0){
//         let digit = n % 10
//         sum += digit
//         n = Math.floor(n / 10)
//     }
//     console.log(sum)
// }
// sumdigit(678)

// 25 
 
// function checkPrime(n) {
//     if (n <= 1) {
//         return " not a prime number"
//     }

//     else{
//         let isPrime = true;
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 isPrime = false; 
//                 break;
//             }
//         }
//         if (isPrime) {
//             return "it is prime number";
//         }
//         else{
//             return "it is Prime number";
//         }
//     }
// }

// console.log(checkPrime(7));
// console.log(checkPrime(10));
// console.log(checkPrime(1));

// 26
// function printPrime(n) {
//     if (n < 2) {
//         console.log("1 se " + n + " tak koi prime number nahi hai");
//         return;
//     }

//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;

//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false; 
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }

// printPrime(10); 
// printPrime(20); 

// 27
// function findLargest(numbers) {
//     if (numbers.length === 0) {
//         return "given any number";
//     } else {
//         let largest = numbers[0]; 

//         for (let i = 1; i < numbers.length; i++) {
//             if (numbers[i] > largest) {
//                 largest = numbers[i]; 
//             }
//         }

//         return largest;
//     }
// }

// console.log(findLargest([10, 45, 2, 99, 23])); 
// console.log(findLargest([-5, -1, -20]));       

// 28
// function findSmallest(number) {
//     if (number.length === 0) {
//         return "given any number";
//     } 
//     else{
//         let smallest = number[0];

//         for (let i = 1; i < number.length; i++) {
//             if (number[i] > smallest) {
//                 smallest = number[i];
//             }
//         }
//         return smallest;
//     }
// }
//  console.log(findSmallest([15,32,56,45]));
//  console.log(findSmallest([-6, -4, -3]))

// 29

// function countMultiples(n) {
//     if (n < 15) {
//         return 0; 
//     } else {
//         let count = 0;
//                 for (let i = 1; i <= n; i++) {
            
//             if (i % 3 === 0 && i % 5 === 0) {
           
//             }
//         }
//         return count;
//     }
// }


// console.log(countMultiples(15)); 
// console.log(countMultiples(30)); 
// console.log(countMultiples(50));

// 30
 function numberGame(n) {
    if (n < 1) {
        console.log("give a number which is 1 or grater than 1");
        return;
    }

    for (let i = 1; i <= n; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}

numberGame(15);