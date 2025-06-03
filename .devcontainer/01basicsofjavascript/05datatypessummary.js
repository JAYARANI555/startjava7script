// there are two types of data types in js 
// # primitive data types:- 

// 7 types :- string ,number,boolearn, null ,undefined,symbol
 //  BigInt 


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//js is a dynamically typed language means the type of a variable is detemined at runtime not compile time.


 // reference(Non primitive)

 // array,objects,functions.

 const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
 //function(){}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // anotherId ki jagah function , null, boolean etc

/* 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
/*
