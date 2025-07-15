const button=document.querySelector("button");
const input_height=document.querySelector("#input_height");
const input_weight=document.querySelector("#input_weight");
const answer=document.querySelector("#result_inner");
const bigbox=document.querySelector("#box");
const suggest=document.querySelector("#suggest");

button.addEventListener("click",()=>{
    const height=input_height.value;  //extracts the value form the input tag
    const weight=input_weight.value;
    bigbox.setAttribute("class","invinsible");
    bigbox.removeAttribute("id");
    answer.removeAttribute("class");
    if(height<0||weight<0|| height===" "||weight===" "){
        const store=document.createTextNode("Please Enter valid entries");
        answer.append(store);
    }
    else{
        const result= ((weight/height**2)*10000).toFixed(2);
        const store=document.createTextNode(`Your BMI is ${result}`);
        answer.append(store);
        if(result<18.6){
            suggest.innerHTML="You are Under weight, recomendation: eat Daarji Chicken<br> (sui bhai thoda weight badha)";
        }
        else if(result<24.9){
            const store=document.createTextNode("You are perfectly fine, continue eating daarji chicken");
            suggest.append(store);
        }
        else{
            suggest.innerHTML="You are overweight buddy but no worries <br> continue eating daarji chicken, taste is more important<br>(my old guy...thoda kam kha)"
        }
        suggest.removeAttribute("class");
    }
    
})