let clock=document.querySelector("#clock");

//set interveal is a method which runs a function continuously at a time interval.

setInterval(() => {
    const mydate= new Date();
    clock.innerHTML=mydate.toLocaleTimeString();
}, 300);