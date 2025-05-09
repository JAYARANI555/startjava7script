const accountId= 1234566
let accountEmail="jaya34@gmail.com"
var accountPassword="123456"
accountCity="bihar"
let accountState; //here we don't assign any number that's why it show undefined .
 
// accountId= 3 this will show error// 

console.log(accountId); //this is only for print 1 line for many we use another.

console.table([accountId,accountEmail,accountPassword]);

accountEmail="jakfhdlke34@gmail.com"
accountPassword="12806"
accountCity="madhubani"

console.table([accountId,accountEmail,accountPassword,accountState]);

/*
dont't use var due to issue in block scope and 
functional scope .
only use let and const.
and we also write a varible without let.
*/ 



