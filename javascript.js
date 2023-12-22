let playerScore = 0;
let computerScore = 0;

// Random computer choice

function getComputerChoice() {
 min = Math.ceil(0);
 max = Math.floor(2);
 randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
 const roundChoice = ["Rock" , "Paper", "Scissors"];
 return roundChoice[randomNumber];
};

function getPlayerChoice() {
 playerInput = prompt("Rock Paper or Scissors?");
 if (playerInput.toLowerCase() == "rock")
    {
    return "Rock";
    }
 else if (playerInput.toLowerCase() == "paper")
    {
    return "Paper";
    }
 else if (playerInput.toLowerCase() == "scissors")
    {
    return "Scissors";
    }
 else 
    {
    console.log("Choice incorrect, please choose between the 3 options")
    getPlayerChoice();
    }
}

function playRound () {
 let playerSelection = getPlayerChoice();
 let computerSelection = getComputerChoice();

 if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection== "Scissors" && computerSelection == "Paper")
 {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return playerScore++;
 }
 else if (playerSelection == computerSelection)
 {
    console.log ("It's a tie!");
 }
 else
 {
    console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    return computerScore++;
 }
}

// Rounds are played until one of the player reaches 5 points

function startGameLoop(){
   for (let index = 0; playerScore < 5 && computerScore < 5; index++) {
      playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);;
      
   }
   if (playerScore == 5)
   {
      console.log("You won the game");
   }
   else if (computerScore == 5)
   {
      console.log("You lost the game.")
   }
}

startGameLoop();