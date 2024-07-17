let userscore=0;
let compscore=0;
let msg=document.getElementById("msg");

let moves=document.querySelectorAll(".image");
const getcomputerchoice=()=>{
 const option=["rock","paper","scissor"];
 const idx=Math.floor(Math.random()*3);
 return option[idx];
}
const drawgame=()=>{
    msg.innerText="it was a draw";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}
const playgame=(userchoice)=>{
 const compchoice=getcomputerchoice();
 let userwin="true";
 if(userchoice===compchoice){
    drawgame();
 }

 else if(userchoice==="rock" && compchoice==="scissor" || userchoice==="paper" && compchoice==="rock"|| userchoice=="scissor" && compchoice==="paper"){
    msg.innerText=`user wins !your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
    userscore++;
    document.getElementById("userscore").innerText=userscore;
 }
 else{
   
    msg.innerText=`you lost ! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    compscore++;
    document.getElementById("computerscore").innerText=compscore;
 }
}

moves.forEach((move) => {
    move.addEventListener("click",()=>{
        const userchoice=move.getAttribute("id");
        playgame(userchoice);
    })
});

