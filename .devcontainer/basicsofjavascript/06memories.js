// stack memory (primitive)use to get a copy of the variable
//  Heap (non-primitive) it use for original value as reference jo bhi change karege original value mei change hoga

let myYoutubename = "jayaranidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@googlr.com",
    upi:"user@ybl"
}

let user2 =user1

user2.email = "jayarani@google.com"

console.log(user1.email); // pura apdate ho jayega 
console.log(user2.email);

