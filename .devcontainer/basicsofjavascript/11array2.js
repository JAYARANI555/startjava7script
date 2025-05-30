const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

 const allheros = marvel_heros.concat(dc_heros)  // same as push.
console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // here we use spread operator(...)


const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // flat() here we write the depth of given array
console.log(real_another_array);

console.log(Array.isArray("jaya"))
console.log(Array.from("jaya"))

console.log(Array.from({ name: "jaya"})) // directly convert nahi kar sakta hai.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score2));
