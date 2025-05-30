// Immediately Invoked Function Expressions(IIFE)

function chai(){
    console.log(`DB CONNECTED`);
    
}

// chai()

// for iife

(function chai(){ // named iffe
    console.log(`DB CONNECTED`);
    
})();
// why do we use IIFE 
// Avoid Polluting the Global Scope
// IIFE creates a private scope, which keeps 
// variables inside the function from leaking into the global namespace.
( function aurcode  () {
    console.log(`DB CONNECTED TWO`);
})(); // inko ye nahi pata hota hai ki stop kab karna hai isi liye; use karte hai.
 // problem function ka nahi ; iska tha use karna tha .

 ( (name) => { // without nameiife.
    console.log(`DB CONNECTED TWO ${name}`);
})('jaya')