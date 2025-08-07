function SetUsername(username){
  // complex DB calls 
  this.Username = username
  console.log("called")
}

function createUser(username, email, password){
  SetUsername.call(this, username)

  this.email = email
  this.password = password
}
const chai = new createUser("chai" ,"chaii@fb.com","123")
console.log(chai);

// for run apply zsh instead of bash and type  node 09_classes_and_oop/call.js