
let score_box = document.querySelector('.score');
let btns = document.querySelectorAll('.btns button');


for(let t of btns)
{
    t.addEventListener("click", toss)
}

let score_user=0
let score_computer=0
//Create Para and Span
let user_para=document.createElement("p")
let user_span=document.createElement("span")
let computer_para=document.createElement("p")
let computer_span=document.createElement("span")

//Add classname to span
user_span.className= "update_score"
computer_span.className= "update_score"

//Additional Value to Para and Span
user_para.innerText= "User Score:"
user_span.innerText=score_user;
computer_para.innerText="Computer Score:";
computer_span.innerText=score_computer;

score_box.append(user_para)
user_para.append(user_span)
score_box.append(computer_para)
computer_para.append(computer_span)


function toss(event){
    
   let user_choice=event.target.innerText
    // internally do a toss
    let choices = ["Head", "Tail"];
    let random_index = parseInt(Math.random()* choices.length);
    let toss_value= choices[random_index];

    // Head, Head
    
    if(toss_value.toLowerCase()==user_choice.toLowerCase())
    {
        score_user++;
        user_span.innerText=score_user;
        
    }
    else
    {
        score_computer++;
        computer_span.innerText=score_computer;
        
    }
    // how to know which button has been clicked
    



}