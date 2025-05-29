const user = {
    username: "jayarani",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); // current context empty hai {}.

// function chai(){
//     let username = "jaya"
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "jaya"
//     console.log(this.username);
// }

// chai()

const chai = ()  => {  // array function.
    let username = "jaya"
    //console.log(this.username);
    console.log(this);
}

//chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2
// here we use implicit return means mei maan li ki return hoga means {} parenthese return nahi hota hai.
//const addtwo = (num1,num2) => (num1 + num2)

//const addtwo = (num1 , num2)  => {username: "jaya"} // aabhi {} iske aanadar object return nahi hoga 
  // object ko return karwane ke liye () use karna hi parega.
const addtwo = (num1 , num2)  => ({username: "jaya"})
console.log(addtwo(3,6));


