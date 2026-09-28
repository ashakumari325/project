// // // let subjects = ["political", "c++","computer science","english"]
// // // console.log(subjects)

// // // console.log(subjects.length)
// // // console.log(subjects[0]);
// // // console.log(subjects[1]);
// // // console.log(subjects[2]);
// // // console.log(subjects[3]);

// // // subjects.push("c++");
// // // console.log(subjects);

// // // subjects.pop();
// // // console.log(subjects);

// // // subjects.unshift("maths")
// // // console.log(subjects)

// // // subjects.shift();
// // // console.log(subjects)

// // // for(let i = 0; i < subjects.length; i++) {
// // //     console.log(subjects[i].toUpperCase())
// // // }

// // // array class 2


// // let subjects = ["political", "c++","computer science","english"]

// // // subjects.forEach(function(subject) {
// // // console.log(subject);
// // // });

// // //  function map method


// // let newSubjects = subjects.map(function(value, index) {
// //     console.log(value, index);
// // });

// // let arr = [12,24,42,44,28,43]
// // let ans = arr.every((num)=>{
// //     return num%2==0
// // })
// // console.log(ans)

// // let ans = arr.every((num)=>{
// //     return num%2==0
// // })
// // console.log(ans)

// // let arr = new Array(12)
// // arr.fill("webnex,0,10")
// // console.log(arr)


// // FUNCTION class

// // function calculations(a){
// //     return (b)=>{
// //         let sum = a + b
// //         return sum
// //     }
// // }

// // let ans = calculations(20)
// // let total = ans(20)
// // console.log(total)

// // function intro(){
// //     function myName(name){
// //         console.log("Hello my name is " + name)
// //         function checktheAge(usrAge){
// //             if(usrAge > 20){
// //                 console.log("you are eligible for Driving licence")
// //             }
// //             else{
// //                 console.log("not eligible for Driving licence")
// //             }
// //         }
// //         checktheAge(17)
// //     }   
// //     myName("Asha kumari")
// // }
// // intro()

// // intro() hoisting

// // function intro(){
// //     console.log("hello how are you")
// // }

// //callback.  :  callback hell

// // function func2(){
// //     console.log("Hello my name is func2")
// // }

// // function func1(callback){
// //         console.log("Hello my name is func1 ")
// //         callback()
// // }

// // func1(func2)

// //default parameters


// // function sumofTwo(a,b = 0){
// //     let sum = a + b
// //     console.log(sum)
// // }

// // sumofTwo(10,40)

// // DESTRUCTURING METHODH

// //let arr = ["thar","fortuner","defender","Gwagon","neno","swift","nexon"]

// // let car1 = arr[0]
// // let car2 = arr[1]
// // let car3 = arr[2]

// // console.log(car1)
// // console.log(car2)
// // console.log(car3)

// // REST OPERATOR

// // let [car1,car2,car3,...car4] = arr;

// // console.log(car1)
// // console.log(car2)
// // console.log(car3)
// // console.log(car4)

// // SPREAD OPERATOR

// //let arr1 = [1,2,3,4,5,6]
// //let arr2 = [7,8,9,10,11]

// //let newArr = [...arr1,...arr2]
// //console.log(newArr)

// let arr = ["that","fortuner","defender","Gwagon","nano","swift","nexon"]

// //let car1 = arr[0]
// //let car2 = arr[1]
// //let car3 = arr[2]
// //let car4 = arr[3]

// //console.log(car1)
// //console.log(car2)
// //console.log(car3)
// //console.log(car4)

// //let [car1,car2,car3,...car4] = arr

// //console.log(car1)
// //console.log(car2)
// //console.log(car3)
// //console.log(car4)

// let arr1 = [1,2,3,4,5,6]
// let arr2 = [6,7,8,9,10,11]

// let newarr = [...arr1,...arr2]
// console.log(newarr)