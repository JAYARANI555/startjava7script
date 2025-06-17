// this is Async Js Based project
// generate a random color

const randomColor =  function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() *16)]
    }
    return color;
};
let intervalId;// here we use this so that it is globally use 
const startChangingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000 ); // this is used to check
    }
      
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)

// console.log(Math.floor(Math.random() *16)); // this line is used to generate random value.


