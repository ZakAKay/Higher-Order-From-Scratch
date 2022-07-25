// Whiteboard, make a code plan and build each of the following methods:
// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
// Create a repo called "Higher-Order-From-Scratch".
// Practice working from branches by creating a new branch called: "HigherOrder".
// Place your code in a file called main.js.
// Create a pull request (PR) for Higher-Order-From-Scratch to be merged into master.


//.map() - function that takes an array of items and a function that returns an array with each item manipulated by that function
//===============================================
//EXAMPLE OF map.() BELOW:
//===============================================
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);                //"=> means it is shorthand for an es6 function" for more in-depth explanation watch lesson plan video 11 on 7-18-22

// console.log(map1);
// expected output: Array [2, 8, 18, 32]

//=================================================
//EXAMPLE OF 1 .map()
//=================================================
//IF RAN WHAT IS THE ANSWER?
const originalArray = [2, 4, 6, 8]; 

const mapVersionOfArray = originalArray.map(x => x * 10);

console.log(mapVersionOfArray)
//ANSWER: [20, 40, 60, 80]

//WHY: LINE 27 "CONST ORIGINALARRAY = [2, 4, 6, 8] IS WHAT IM NAMING THE ORIGINAL ARRAY, LINE 29 "CONST MAPVERSION" OF ARRAY IS WHAT IM NAMING THE NEW ARRAY WHEN THE ORIGINAL ARRAY HAS BEEN CHANGED BY THE MAP FUNCTION. THE "MAPVERSION = ORIGINALARRAY.MAP(X => X * 10);" IS ME TELLING JS THAT I WANT THE ORIGINALARRAY TO BE CHANGED BY THE MAP FUNCTION, WHATS IN BETWEEN THE () IS THE FORMULA I WANT APPLIED TO THE ORIGINALARRAY. IN THIS CASE I WANT X (THE VALUES IN THE ORIGINAL ARRAY) TO BE EQUAL TO THE VALUES IN THE ARRAY IF THEY WERE MULTIPLIED BY 10. LINE 31 CONSOLE.LOG(MAPVERSIONOFARRAY) IS TELLING JS I WANT THE NEW/CHANGED ARRAY TO BE RETURNED/PRINTED. 

//=================================================
//EXAMPLE OF 1 .map()
//=================================================
//QUESTIONS: WHAT IS THE ANSWER FOR THE EXAMPLE BELOW?
let originalArray = ['zAk', 'JoHn', 'aMY', 'ROBBIN']

const changedArray = originalArray.map(function(value){
  return value.toLowerCase()
})
    console.log(changedArray)
//ANSWER: 

// let originalArray = ['zAk', 'JoHn', 'aMY', 'ROBBIN']

const changedArray2 = originalArray.map((value)=>{
  return value.toUpperCase()
})
  
console.log(changedArray2)


//=============================================================================
//.reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
//==============================================================================
//EXAMPLE OF .REDUCE() BELOW
const array1 = [1.00, 2.00, 3.00, 4.00];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
//=========================================================================================
//MY VERSION OF .REDUCE()
//==========================================================================================
const foodArray = [77.00, 53.00, 21.00, 10.05]

const startingValue = 0;
const sumWithInitial = foodArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue, startingValue
  );

console.log(sumWithInitial)
//answer: 161.05
//=========================================================================================
//MY SECOND VERSION OF .REDUCE()
//==========================================================================================

const array = [42, 10, 34, 100]

const initialValue = 0;
const sumWithInital = array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumWithInital)
//answer: 186

//=========================================================================================
//MY third VERSION OF .REDUCE()
//==========================================================================================
// const numbers = [1, -1, 2, 3];
// // let sum = 0;
// // for (let n of numbers) 
// // // sum = sum + n; 
// //   sum += n;
// //   console.log(sum);
//  const sum numbers.reduce((accumulator, currentValue) => {  //the accumulator is exactly like line 102, let sum = 0;  NOTE, this reduce method has 2 arguments in it..ghe first argument is a callback function. "(// (accumulator, currentValue) => {  
//     //   return accumulator + currentValue;
//     // }).....the second argument "0);"  is the initial value for the accumulator
//     return accumulator + currentValue;
//   }, 0);

//   console.log(sum)
 //answer is 5
 //SAME INFO FROM EXAMPLE ABOVE, JUST A DIFFERENT WAY OF DOING THINGS
 const numbers = [1, -1, 2, 3];
// a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {       //A = ACCUMULATOR WHICH IS THE 0 ON LINE 122...CURRENTVALUE IS THE VALUES IN THE ARRAY
  return accumulator + currentValue; 
}, 0);

console.log(sum);
//ANOTHER WAY TO MAKE THE CODE SHORTER FROM THE EXAMPLE ABOVE 

const numbers = [1, -1, 2, 3];
// //a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5
 const sum = numbers.reduce((accumulator, currentValue) => {     
  return accumulator + currentValue;
 });           // BECAUSE I DONT HAVE THE ACCUMULATOR/INITIAL SET UP TO BE 0 LIKE IN THE EXAMPLE ABOVE THE INITIAL VALUE WILL BE THE FIRST ELEMENT IN THE ARRAY 

 console.log(sum);

 //ANOTHER EXAMPLE TO MAKE THE CODE EVEN SHORTER
 const numbers = [1, -1, 2, 3];
// //a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5
 const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue
 );      
 console.log(sum);
//=================================================================================================================================
//..filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
//====================================================================================================================================
//EXAMPLE 1
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//EXAMPLE 2
let words = [5, 4, 9, 2, 1];

function isEven(num) {
  if (num % 2==0) 
    return true;
}

words = words.filter(isEven)
console.log(words);

//=================================
//es6 version of example above
//=================================

let words = [5, 4, 9, 2, 1];
 
words = words.filter(x => x % 2 == 0);
console.log(words);
//will return only even numbers from array

//another example
let words = [5, 4, 9, 2, 1];
 
words = words.filter(x => x % 2 == 1);
console.log(words);
//will return only odd numbers from array

