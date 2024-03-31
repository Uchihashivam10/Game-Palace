let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreTxt = document.querySelector("#user-score");
const compScoreTxt = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("win");
        userScore++;
        userScoreTxt.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("lose");
        compScore++;
        compScoreTxt.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = ()=>{
    // console.log("draw");
    msg.innerText = "DRAW Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log(userChoice, compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } 
  else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }

  
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
