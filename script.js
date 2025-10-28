let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".icon");
const msg = document.querySelector("#msg");
const computerch = document.querySelector(".compchoice");
const yourscr = document.querySelector("#yourscr");
const compscr = document.querySelector("#compscr");
choices.forEach((icon)=>{
    console.log(icon);
    icon.addEventListener("click",()=>{
        const userin = icon.getAttribute("id");
        console.log("icon was clicked",userin);
        playgame(userin);
    });
});
const compchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randin = Math.floor(Math.random()*3);
    return options[randin];
}
const draw = ()=>{
    console.log("This is a Draw");
    msg.innerText = "Draw Match!";
}
const showwin = (userwin , userin, compin)=>{
    if(userwin){
        userscore++;
        yourscr.innerText = `${userscore}`;
        console.log("You win");
        msg.innerText = `You Won!, ${userin} beats ${compin}`;
    }
    else{
        compscore++;
        compscr.innerText = `${compscore}`;
        console.log("you lose");
        msg.innerText = `You Lost!, ${compin} beats ${userin}`;
    }
}
const showcompchoice = (compin)=>{
    computerch.innerText = `${compin}`;
    
}

const playgame = (userin)=>{
    console.log("User Choice =",userin);
    const compin = compchoice();
    console.log("Computer choice =",compin);
    if(userin === compin){
        draw();
        showcompchoice(compin);
    }
    else{
        let userwin = true;
        if (userin==="rock"){
            userwin = compin === "paper" ? false : true;
        }
        else if(userin==="paper"){
            userwin= compin === "scissors" ? false : true;
        }
        else if(userin==="scissors"){
            userwin= compin === "rock" ? false: true;
        }
        else{
            userwin = true;
        }
        showcompchoice(compin);
        showwin(userwin,userin,compin);
    }
}