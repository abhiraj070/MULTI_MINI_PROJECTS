const bigbox=document.querySelectorAll(".box");
const body=document.querySelector("body");
bigbox.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        const color=box.getAttribute("id");
        body.setAttribute("id",color);   
        console.log(e.target).backgroundcolor;
             
    })
})