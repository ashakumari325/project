
//  print 1 to 10 Number

// let a = 1
// while( a < 10){
//     console.log(a)
//     a++
// }
//   print 10 to 1
// let b = 10
// while( b >= 1){
//     console.log(b);
//     b--;
// }
// print 1 -20 natural Number

// let c = 1
// while( c <= 20){
//     console.log(c);
//     c++;
// }

// sum natural Number

// let d = 1 ;
// let sum = 0;
// while(d <=20){
//     sum = sum + d;
//     d++;
// }
// console.log(sum);

// even number 1 - 100
// let e = 2
// while(e <= 100){
//     console.log(e);
//     e = e + 2;
// }
 
// odd number 1- 100

// let f = 1
// while(f <= 100){
//     console.log(f);
//     f = f + 2;
// }

// multiplication number

// let num = 5;
// let i = 1;

// while(i <= 5){
//     console.log(num + "x" + i + " = " + (num*i));
//     i++
// }

// sum of even number 1 to 100
// let  h = 2
// let even = 0;
// while(h <=100){
//  console.log(h);
//  h = h + 2
// }

// sum of odd number 1 to 100

// let j = 1
// let odd = 0;
// while(j <=100){
//     console.log(j);
//     j = j + 2
// }

//  print 1 to N
// let nam = +prompt ("Enter your number")
// let k = 1;
// while(k <= nam){
//     console.log(k);
//     k++
// }
// SECTION 2 WHILE LOOP
//  number 1 -50

// let l = 1
// while(l <= 50){
// console.log(l);
//     l++
// }

// number 50 -1
// let m = 50
// while(m >= 1){
//     console.log(m);
//     m--
// }
//    5 upto 100

// let n = 5
// while(n <=100){
//     console.log(n)
//     n = n + 5
// }

// // sum 1 to n
// let o = 10;
// let p  = 1;
// let sum = 0;
// while(p <= o){
// sum = sum + p;
// p++;
// }
// console.log(sum);

// // multiplying table
// let x = 5;
// let y = 1;
// while (y <=5) {
//     console.log(x * y);
//     y++
// }
  
// let x = 12345;
// let y = 0;
// while(x > 0){
//     x = (x - (x % 10)) / 10;
//     y++;
// }
// console.log(y);

// palindrome

// let x = 111;
// let reverse = 0;
// while (x > 0) {
//     let digit = x % 10 ;
//     reveerse = reverse * 10 + digit ;
//     x = (x - digit) / 10;
// }


// sum of Digit

// let x = 567;
// let sum = 0;
// while (x > 0) {
//   let digit = x % 10;
//   sum = sum + digit;
//   x = (x - digit) / 10;  
// }
// console.log(sum);

// fibonacci
// let x = 0;
// let y = 1;
// let count = 1;
// while(count <= 10){
//     console.log(x);
//     let c = x + y;
//     x = y;
//     y = c;
//     count++;
// }

// SECTION 3 DO WHILE LOOP
// 21

// let a = 1
// do{
//     console.log(a);
//     a++;
// }
// while(a <= 20)

// 22
// let a = 10;
// do{
//     console.log(a);
//     a--;
// }
// while( a >= 1);

// 23
 
// let a = 2;
// do{
//     console.log(a);
//     a = a + 2;
// }
// while(a <= 20);

// 24
 
// let a = 1; 
// do{
//     console.log(a);
//     a = a + 2;
// }
// while(a <= 20);

// 25

// let a = 5;
// let b = 1;
// do{
//     b = b * a;
//     a--;
// }
// while(a > 0);
// console.log(b);

// 26

// let a = 2;
// let power = 3;
// let result = 1;
//  do {
//     result = result * a;
//     power--;
//  }
//  while (power > 0);
//  console.log(result);

//  27

// let a = 567;
//  let sum = 0;
//  do {
//   let digit = a % 10;
//   sum = sum + digit;
//   a = (a - digit) / 10;  
// }
// while(a > 0);
// console.log(sum);

// 28

// let a = 12345;
// let reverse = 0;
//  do{
//     let digit = a % 10;
//     reverse = reverse * 10 + digit;
//     a = (a - digit) / 10;    
//  }
//  while (a > 0);
//  console.log(reverse);
 
//  29

// let a = 1;

// do {
//     let b = 1;

//     do {
//         console.log(a + " x " + b + " = " + (a * b));
//         b++;
//     } while (b <= 10);

//     a++;
// } while (a <= 10);  
// 30
// let x ;
// do{
//     x = +prompt ("Enter your number")
//     console. log(x)
// }
// while(x != 0)

// NESTED LOOP

// // 31
// let row = 1;
//  while(row <= 5) {
//     let pattern = "";
//     let col = 1;



//      while (col <= 5){
//      pattern = pattern + "*";
//      col++
//      }
//  console.log(pattern);
//  row++;
//      }

    //  32
    // rectangle pattern

    // let row = 1;
    // while(row <=5) {
    //     let pattern = "";
    //     row++;

    //     let col = 1;
    //     while(col <= 7){
    //         pattern += "*"
    //         col++;
    //     }
    //     console.log(pattern);
    // }

    //32

    // let row = 1;
    // while(row <= 5) {
    //     let pattern = "";
    //     row++;
        
    //     let col = 1;
    //     while(col <= 7){
    //         pattern += "*";
    //         col++;
    //     }
    //     console.log(pattern);
    // }

    // 33

//     let row = 6;
//     while(row >= 1){
//         let pattern = "";
//         let col = 1;
    
//     while(col <= row){
//         pattern += "*"
//         col++;
//     }
//     console.log(pattern);
//     row--;
// }


// 34

// let row = 1;
// let num = 1;

// while (row <= 5) {
//     let pattern = "";
//     let col = 1;

//     while (col <= row) {
//         pattern = pattern + num + " ";
//         num++;
//         col++;
//     }

//     console.log(pattern);
//     row++;
// }


// number problem

// 35

// let n = 7;
// let i = 1;
//  let isprime = true;
//  while(i < n) {
//     if(n % 1 === 0) {
//         isprime = false;
//     }
//     i++;
//  }
//  if(isprime && n > 1) {
//     console.log("prime")
//  }
//  else{
//     console.log("not-prime");
//  }

// 36
// let n = 2;
// while(n <= 100){
//     let i = 2;
//     isprime = true;

//     while(i < n) {
//         if(n % i == 0) {
//             isprime = false;
//         }
//         i++
//     }
//     if(isprime){
//         console.log(n);
//     }
//     n++;
// }




// 37

// let n = 153;
// let original = n;
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum = sum + sum * digit * digit * digit ;
//     n = (n - digit) / 10;
// }
// if(sum == original) {
//     console.log("Armstrong number")
// }
// else{
//     console.log("not armstrong number")
// }

// 38

// let n = 6;
// let i = 1;
// let sum = 0;
// while(i < n) {
//     if (n % i == 0) {
//         sum = sum + i;

//     }
//     i++;
// }
// if(sum == n){
//     console.log("perfect number")
// }
// else{
//     console.log("not perfect number")
// }

// 39
// let a = 12;
// let b = 18;
// while (b != 0){
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// console.log(a);

// 40

// let a = 12;
// let b = 18;
// let LCM = a;
// while(LCM % b != 0) {
//     LCM = LCM + a ;
// } 
// console.log(LCM);

// 41
// let a = 0;
// let b = 1; 
// let count = 1;
// while (count <= 10) {
//     console.log(a);
//     let c = a + b;
//      a = b;
//      b = c;

//      count++;
// }

// 42
// let n = 12; 
// let i = 1;
 
// while (i <= n) {
//     if (n % i == 0) {
//         console.log(i);
//     }
//     i++;
    
// } 

// 43
// let n = 9;
// let original = n;
// let square = n * n;
// let sum = 0;
// while  (square > 0) {
//     let digit = square % 10;
//     sum = sum + digit;
//     square = (square - digit) / 10;
// }

// if (sum == original) {
//     console.log("neon number")
// }
// else{
//     console.log("not neon number")
// }

// STRING PROBLEM
// 44

// let a = "hello";
// let b = 0;
// let c = 0;

// while (c < 5) {
//     b++;
//     c++;
// }
// console.log(b);

// 45
// let str = "hello";
// let i = 0;
// let count = 0;

// while (i < 5) {
//    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//         count++;
//     }
//     i++;
// }

// // console.log(count);


// 46
  
// let str = "hello";
// let i = 0;
// let count = 0;


//  while (i < 5) {
//  if (str[i] == "a" && str[i] == "e" && str[i] == "i" && str[i] == "o" && str[i] == "u") {
//     count++;
//  }
//  i++;
//  }
//  console.log(count);

// 47

// let str = "hello";
// let reverse = "";
// let i = 4;

// while (i >= 0) {
//     reverse = reverse + str[i];
//     i--;
// }
// console.log(reverse);

// 48

// let str = "madam";
// let reverse = "";
// let i = 4;

// while (i >= 0){
//     reverse = reverse + str[i];
//     i--;
// }
// if(str == reverse) {
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// 49

// let str = "I love coding"
// let count = 1;
// let i = 0;
// while (i < 13) {
//     if (str[i] == " ") {
//         count++;
//     }
//     i++;
// }
// console.log(count);

// 50

// let str = "abcdef";
// let i = 0;
// while (i <= 6) {
//     console.log(str[i]);
//     i = i + 2;
// }

// 51
let str = "hello";
let char = "i";
let count = 0;
let i = 0;

while(i < 5) {
    if(str[i] == char) {
        count++;    
    }
    i++;
}
console.log(count);


// pattern question by sir
// let n = 5;

// for (let i = 1; 
//     i <= n;
//     i++
// )
// {
//     let row = "";
//     for (let j = 1;
//         j <= i ; 
//         j++
//     )
//     {
//         row += "*";
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1;
//     i <= n;
//     i++
// )
// {
//     let row = "";
//     for (let j = 1;
//         j <= i ;
//         j++
//     )
//     {
//         row = row + i;
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1;
//     i <= n;
//     i++
// )
// {
//     let row = "";
//     for (let j = 1;
//         j <= i ;
//         j++
//     )
//     {
//         row = row + j;
//     }
//     console.log(row);
// }

 let num = 1 ;
 for (let i = 1;
    j <= i;
    j++
 )

 {
    let row = "";
    for (let j = 1;
        j =1;
        j <= i;
        j++
    )
    {
        row = row + num + " ";
        num++;
    }
    console.log(row);
 }