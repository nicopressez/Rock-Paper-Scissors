// Initialize player and computer score

let playerScore = 0;
let computerScore = 0;

// The computer randomly decides rock paper or scissors 

function getComputerChoice() {
min = Math.ceil(0);
max = Math.floor(2);
randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
if (randomNumber == 0) 
{
  return "Rock";
}
else if (randomNumber == 1)
{
    return "Paper";
}
else if (randomNumber == 2)
{
    return "Scissors"
}
};

// Get player choice based on prompt input
// If player types something else, ask again

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

// Plays a single round of Rock Paper Scissors
// Determine the winner and update player scores
// Display computer's choice + the result of the round

function playRound () {
let    playerSelection = getPlayerChoice();
let    computerSelection = getComputerChoice();

if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection== "Scissors" && computerSelection == "Paper")
{
    console.log ("The computer chose:" + " " + computerSelection)
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    return playerScore++;
}
else if (playerSelection == computerSelection)
{
    console.log ("The computer chose:" + " " + computerSelection)
    console.log ("It's a tie!");
}
else
{
    console.log ("The computer chose:" + " " + computerSelection)
    console.log("Computer wins! " + computerSelection + " beats " + playerSelection );
    return computerScore++;
}
}

// 5 rounds are played, the computer's and player scores show on console.
// Todo: Make this part a loop when revamp

function game() {
    playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);
    playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);
    playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);
    playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);
    playRound();
    console.log ("Your current score is: " + playerScore);
    console.log ("The computer's score is: " + computerScore);
    
}

game();


// Todo: Game stops when a player reaches score "5" 
