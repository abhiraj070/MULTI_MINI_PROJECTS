const start=document.querySelector("#b1");
const end= document.querySelector("#b2");
let store;
const palete="0123456789ABCDEF";
let colorfn=()=>{
    let color="#";
    for( let i=1;i<=6;i++){
        color+=palete[Math.floor(Math.random()*16)];
    }
    return color;
}
start.addEventListener("click",()=>{
    store= setInterval(()=>{
        document.body.style.backgroundColor=colorfn();
    },3000)
})
end.addEventListener("click",()=>{
    clearInterval(store);
})