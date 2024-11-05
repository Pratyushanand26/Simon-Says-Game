let userseq=[];
let gameseq=[];
let btns=["yellow","red","purple","green"];
let started =false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
        }
function userFlash(btn){
     btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash")
            },250);
                }
function levelUp() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random()*4);
    let rancol=btns[ranInd];
    let ranbtn=document.querySelector(`.${rancol}`);
    gameseq.push(rancol);
    gameFlash(ranbtn);

}
function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value");
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }
}
function btnpress(){
    let btn=this;
    userFlash(this);
    console.log(this);
    let usercol=btn.getAttribute("id");
    userseq.push(usercol);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    level=0;
    started=false;
    gameseq=[];
    userseq=[];
}
