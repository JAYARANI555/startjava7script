//   if
//const isuserloggedin= true
const temperature = 41

// if (2 == "2") {
//     console.log("execute");
    
// }

// if (2 !=3) {
//     console.log("execute");
    
// }
// if (temperature < 50) {
//       console.log("less than 50");
      
// }
// console.log("temperature is greater than 50"); // ye run hoga hi isko if condition se koi lena dena nahi hai.
//2<=2   both are for check
// 2 !=3 
//<, >, <=, >=, ==,!=, ===,!==

// if (temperature < 50) {
//       console.log("less than 50");
      
// }
// else{

//     console.log("temperature is greater than 50");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);

//const balance = 1000

// if(balance > 500) console.log("test");// implict code.
// if(balance > 500) console.log("test"),console.log("test2"); ise kabhi use nahi karna hai bekar hai.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}