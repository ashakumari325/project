let num = +prompt ("Enter the number")
if(num > 0 ){
    console.log("positive num")
}
else{
    console.log("non positive number")
}


// 2
let personage = +prompt ("Enter the number")
if(num = 18){
    console.log("Eligible to vote")
}
else{
    console.log("not eligible to vote")
}

// 3

let number = +prompt ("Enter the number")
if(number %2 == 0){
    console.log("even number")
}
else{
console.log("odd number")
}

// 4

let a =+prompt ("Enter the number")
let b = +prompt ("Enter thr number")
if( a < b){
    console.log("first is greater")
}
else{
    console.log ("second is greater")
}

// 5

let character = prompt ("Enter the number")
if( character === "a" || 
    character === "e" || 
    character === "i" || 
    character === "o" || 
    character === "u" ||
    character === "A" || 
    character === "E" || 
    character === "I" || 
    character === "O" || 
    character === "U"){
    console.log("vowel")
}
else{
    console.log ("consonent")
}

// 6

let value = +prompt("Enter the number")
if(value % 5 === 0) {
    console.log("divisible by 5")
}
else{
    console.log("not divisible by 5")
}

// 7
let marks = +prompt("Enter your Marks")

if(marks >= 40){
    console.log("Pass")
}else{
    console.log("Fail")
}

// 8
let f = +prompt("Enter f Number")

if(f > 0){
    console.log("Positive")
}else if (f < 0){
    console.log("Negative")
} else{
    console.log("Zero")
}


// 9


let year = prompt("Enter Your Year")

if(year %4 == 0){
    console.log("Leap Year")
} else{
    console.log("Not a Leap Year")
}

// 10

let unit = +prompt("Enter Electricity Unit")

if(unit <= 100){
    console.log("Low Charge")
}else if(101 <= unit >= 200){
    console.log("Medium Charge")
}else {
    console.log("High Charge")
}