// singleton when we use it as literals then they don't make singletone.
// object.create   kabhi aur baat karege.
// object literals 

const mySym = Symbol("key1") // interview question.

const jsuser = {
       name : "jaya",
       "full name": "jaya rani", // isa value ko 1 way se jo ki dot hai kabhi bhi access nahi kar sakte hai.
       mySym :"mykey1", //  accessible by this way but not as symbole.
       [mySym] :"mykey1", // accessible  also by this way but as symbole.
       age : 18 ,
       location:  "bihar" ,
       email: "jaya9383@gmail.com",
       isLoggedIn: false,
       lastlogindays : ["monday","sunday"]
}  // object.

console.log(jsuser.email); // anotherway also
//console.log(jsuser[email]); // ise nahi run hoga error aayega.
console.log(jsuser["email"]); // ye run hoga.
// console.log(jsuser.full name); show error
console.log(jsuser["full name"]);
console.log(jsuser.mySym);// run hoga but symbol ke jaise nahi run hoga as data type rum hoga .
console.log(jsuser[mySym]); // run as a symbol.
 
jsuser.email = "hjVWUFDYGWKKJZBA@GMAIL.COM"

// Object.freeze(jsuser)

jsuser.email = "dwidwidk@idehc.com"

console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello jsuser");
    
}

console.log(jsuser.greeting); //it gives undefined due to freeze.

console.log(jsuser.greeting()); // error not recommanded as function. becaus upper object ko freeze freeze 
                                 // kar diye the usko comment karne ke baad ye run hoga. 
jsuser.greetingtwo = function(){
    console.log(`hello jsuser ${this.name}`);
    
}

console.log(jsuser.greetingtwo());