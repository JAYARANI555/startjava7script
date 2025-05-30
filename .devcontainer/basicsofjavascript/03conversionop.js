let value = 3
let negvalue = -value
//console.log(negvalue); // -3

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = "jaya"

let str3 = str1 + str2
console .log(str3);  // its easy 

// the complex situation is when 

console.log("1" + 2);   // 12   how  ???
console.log(1 + "2");  // 12
console.log("1" + 2 + 2 ); // 122 due to all conversion in string that's why it gives 
                                 // the value 122.
console.log(1 + 2 + "2"); // 32 give because all these runs under a special rule.                                 
 // aagar string first mei hai to direct value pura string mei aayega lekin 
 // aagar string last hai to pehle conversion hoga then last string add hoga .
 
console.log(true); // value is true
console.log(+true); // value is 1 . but not a good way to write.
//console.log(true+); // this wiill give error.
console.log(+""); // tricky and give 0 answer.


let num1, num2,num3

num1 = num2 = num3 = 2 + 2 // not a good code .

let gamecounter = 100
 gamecounter++;
 ++gamecounter;
 console.log(gamecounter);  // value is 101
 
