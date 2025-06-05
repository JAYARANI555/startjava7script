const name = "jaya"
const repocount = 50

// console.log(name +repocount + "value");  

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('jayarani-kuma') //string declare

/*console.log(gamename[2]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('a'));*/

const  newString = gamename.substring(0 ,3)
console.log(newString);

const anotherString = gamename.slice(-8 , 3)
console.log(anotherString)

const newStringone = "    jayarani   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://jayarani.com/jayarani%07rani"

console.log(url.replace('%07','-'))

console.log(url.includes('rani.com'))

console.log(gamename.split('-'));




