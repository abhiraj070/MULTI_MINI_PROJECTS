const submit=document.querySelector("#Submit");
const end=document.querySelector("#end");
const numb=document.querySelector("input");
const bigbox=document.querySelector("#big_box");
const result=document.querySelector("#anounce")
const best_score_div=document.querySelector("#best_Score");
const play_again_button=document.querySelector("#play_again");
let conti;
const random=Math.ceil(Math.random()*100)%20+1;
console.log(random);
let best_score=11;
let i=0;
    submit.addEventListener("click",()=>{
        conti=numb.value;
        if(isNaN(conti)||conti<=0||conti>20){
            alert("Enter a valid input between 1 to 20");
            numb.value="";
        }
        else{
            i++;
            if(conti==random){
                bigbox.removeAttribute("id");
                bigbox.setAttribute("class","invinsible");
                result.removeAttribute("class");
                play_again_button.removeAttribute("class");
                result.innerHTML=`Well done! You guessed the number in ${i} attempts`;
                if(best_score>i){
                    best_score_div.innerHTML=`Your Best Score: ${i}`;
                }
            }
            if(i==11){
                bigbox.removeAttribute("id");
                bigbox.setAttribute("class","invinsible");
                result.removeAttribute("class");
                play_again_button.removeAttribute("class");
                result.innerHTML="Better Luck Next Time!"; 
            }
            numb.value="";
        }
    })
    play_again_button.addEventListener("click",()=>{
        bigbox.removeAttribute("class");
        bigbox.setAttribute("id","big_box");
        result.setAttribute("class","invinsible");
        play_again_button.setAttribute("class","invinsible");
        const random=Math.ceil(Math.random()*100)%20+1;
        console.log(random);
        i=0;
    })
    end.addEventListener("click",()=>{
        bigbox.removeAttribute("id");
        bigbox.setAttribute("class","invinsible");
        result.removeAttribute("class");
        play_again_button.removeAttribute("class");
        result.innerHTML="Go back Simon!!";
    })