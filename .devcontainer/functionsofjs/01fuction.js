
// function saymyname(){
//    console.log("J");
//    console.log("A");
//    console.log("Y");
//    console.log("A");

// }

//saymyname();

function addtwonumber(num1,num2){

    // let result = num1 + num2
    // return result // result ke baad kuch bhi print nahi hoga.
    // console.log(num1+num2);

    return num1 + num2
}

// addtwonumber(2,7);
//addtwonumber(2,"7"); // output 27 because both think that both are string for each other.
//addtwonumber(2, "a");
//addtwonumber(2, null); // only give 2 

 const result = addtwonumber(2,7)

//  console.log("result is: " , result);

// function loginusermessage(username){
function loginusermessage(username = "jaya"){
    // if(!username){ it is also used.
    if( username === undefined){ // in js empty string is a false string.
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
 
// console.log(loginusermessage("jayarani"))
// console.log(loginusermessage);not applicable.

//console.log(loginusermessage())

//function calculatecartprice(...num1){ // ... rest operator or spread operator.
function calculatecartprice( val1,val2, ...num1){ // it will give only 600,700 because starting two value 
                                                //   are assign as val1,val2.
    return num1              // it will give an array.
}

//console.log(calculatecartprice(200, 400 ,600 , 8000))


const user = {
    username: "jaya",
    price: 999
} 

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleobject(user) username bana kar pass huaa hai.

handleobject({  ///direct bhi pass kar sakte hai object then ye name bakki.
    username: "radha",
    price: 890
})

const mynewarray = [200,400,500,600]
    
function returnsecondvalue(getarray){
      return getarray[1]
}
//console.log(returnsecondvalue(mynewarray)); result according to above details.

console.log(returnsecondvalue([200,500,300,700]));

