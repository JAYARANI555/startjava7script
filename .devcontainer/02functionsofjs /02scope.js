
//var c = 300 // problem create karta hai isi liye use nahi karte hai var.

let a = 300

if ( true) {

let a = 10 // a and b error dega because ye scope ke aanadar ka hai.
const b = 20
//var c = 30  // remove this. //  ye vlaue return kar dega .var bekar hai.isi liye starting mei hi mana kar di thi.
//console.log("INNER: ", a);
}// if ke aandar jitni bate likhi hai wo blocks scope hai and uske bahar global scope.
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "jaya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    
    two()

}
// one() // aagar two() nahi hoga to to one() ke hone ke baad bhi execute nahi hoga.


if (true){
    const username = "jaya"
    if(username === "jaya"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website); 
}
//console.log(username);


//+++++++++++++++++ interesting ++++++++++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(6)) // ye function ke upper bhi ho sakta hai.

const addtwo = function(num){
    return num + 2
}

addtwo(5) // isko const addtwo no ke upper le kar jaugi to error aayega.