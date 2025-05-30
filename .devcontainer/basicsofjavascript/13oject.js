//const tinderuser =  new Object()  this is singleton object 
const tinderuser = {}  // non singleton object otherwise no any changes.

tinderuser.id = "123abc"
tinderuser.name = "jaya rani"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularuser = {
    email : "kidisxoibwascp@gmail.com",
     fullname : {
        username: {
            firstname: "jaya",
            lastname: "rani"
        }
    }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.username);
// console.log(regularuser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor isa likhane par baar baar likhana parta hai.

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
