let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const drawgame=()=>
{
    console.log("game was drawn");
    msg.innerText="DRAW PLAY AGAIN";
    msg.style.backgroundColor="black";
};
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
}
const showwinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`YOU WIN ! YOUR ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`YOU LOSE ! computers ${compchoice} beats YOUR ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice)
   const compchoice= gencompchoice();
   console.log("compchoice=",compchoice);
   if(userchoice === compchoice)
   {
     drawgame();
   }
   else{
    let userwin=true;
    if(userchoice === "rock")
    {
        userwin=compchoice=="paper" ?false : true;
    }
    else if(userchoice === "paper")
    {
          userwin=compchoice === "scissors"? false : true;
    }
    else{
        userwin=compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
   }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
  const userchoice=choice.getAttribute("id");
  playgame(userchoice);
    }
    );
}

);