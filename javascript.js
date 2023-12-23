let playerScore = 0;
let computerScore = 0;

const gameArea = document.querySelector('#gameArea');

const rockBtn = document.querySelector('#Rockbtn');
const paperBtn = document.querySelector('#Paperbtn');
const scissorsBtn = document.querySelector('#Scissorsbtn');

const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');

const gameResult = document.querySelector("#gameResult");
const roundResult = document.querySelector('#roundResult');

const replayButton = document.createElement('button');
replayButton.innerText="Replay";
replayButton.addEventListener ('click' , () => {
 computerScore = 0;
 playerScore = 0;
 updateScores();
 gameResult.textContent = "";
 gameArea.removeChild(replayButton);
})

// Random computer choice

function getComputerChoice() {
 min = Math.ceil(0);
 max = Math.floor(2);
 randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
 const roundChoice = ["Rock" , "Paper", "Scissors"];
 return roundChoice[randomNumber];
};


function playRound (playerSelection) {
 let computerSelection = getComputerChoice();

 if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection== "Scissors" && computerSelection == "Paper")
 {
   roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
   playerScore++;
   updateScores ();
   finalScoreCheck();
 }
 else if (playerSelection == computerSelection)
 {
   roundResult.textContent = "It's a tie!";
}
 else
 {
   roundResult.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
   computerScore++
   updateScores();
   finalScoreCheck();
 }
}

// Start a new round when player clicks on choice

rockBtn.addEventListener('click', () => {
   if (playerScore !== 5 && computerScore !== 5)
   {
    playRound("Rock");
   }
});
paperBtn.addEventListener('click', () => {
   if (playerScore !== 5 && computerScore !== 5)
   {
    playRound("Paper");
   }
})
scissorsBtn.addEventListener('click', () => {
   if (playerScore !== 5 && computerScore !== 5)
   {
    playRound("Scissors");
   }
})

function updateScores(){
   displayPlayerScore.textContent = `${playerScore}`;
   displayComputerScore.textContent = `${computerScore}`;
   }
   updateScores();
   
   function finalScoreCheck (){
      if (computerScore == 5)
      {
         gameResult.textContent = "Game over! Computer won.";
         gameArea.appendChild(replayButton);
      }
      else if (playerScore == 5)
      {
         gameResult.textContent = "Game over! You won.";
         gameArea.appendChild(replayButton);
      }
   }

