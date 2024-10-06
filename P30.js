let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];
let level=0;
let started=false;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started=="false"){
        console.log("game is started");
        started="true";
    }
    levelup();
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randcol=btns[Math.floor(Math.random()*3)];
   let randbtn=document.querySelector(`.${randcol}`);
   gameseq.push(randcol);
   console.log(gameseq);
    gameflash(randbtn);
}
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 function checkAns(idx){
    console.log("curr level:",level);
  
    if(userseq[idx]===gameseq[idx])
        {if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }}
    else{
        h2.innerHTML=`Game Over! Your score was ${level} </br> press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
 }
function btnpress(){
   let btn=this;
   userflash(btn);
  let userColor=btn.getAttribute("id");
  userseq.push(userColor);
   

  checkAns(userseq.length-1);
}
    let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
userseq=[];
level=0;}