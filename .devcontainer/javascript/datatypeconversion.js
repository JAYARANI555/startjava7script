let score = 33  // number

console.log(typeof score);
console.log(typeof(score)); // two ways to write this .

let scores = "33" // string 

console.log(typeof scores);
console.log(typeof(scores)); // two ways to write this .


let scoress = "33abc" // string dhyan se karna jab 33abc ko convert
// karte hai tab to number dikhayega but jab iska type dekhate hai tab ye NaN 
// dikhayega means number in number.

let valueInNumber = Number(scoress)
console.log(typeof scoress);
console.log(typeof valueInNumber);
 // if is null then gives 0 and if undefined then gives NaN.
 //if it is booleans then it is true then gives 1 .


 // "33" => 33
//  "33abc" => NaN 
// TRUE => 1;  false => 0

let isLoggedIn = 1
let  booleanIsLoggedIn = Boolean(isLoggedIn)


console.log(valueInNumber);
  
// 1 => true;
// 0 => false;
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);




