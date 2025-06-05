// array 

const myArr = [0,1,2,3,4,5,]
const myHeores = ["jaya bachhan","jaya prada","jaya kishori"]


constmyArr2 = new Array(1,2,3,4,)
//console.log(myArr[1]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.p0p()

//myArr.unshift(9) // when we use this it shift in starting of array.
//myArr.shift() // value remove just like push and pop.
 
//console.log(myArr.includes(9)); // result in boolean form.
//console.log(myArr.indexOf(9)); // if given index is not given then it give -1.

//const newArr =  myArr.join()

//console.log(myArr);
//console.log(newArr); // answer same hoga but jab isa type dekhege to wo convert rahega.

//console.log( typeof newArr);

//slice ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

//differnece between slice and splice