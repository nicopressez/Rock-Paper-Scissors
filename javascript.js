// The computer randomly returns rock paper or scissors //
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
    getPlayerChoice();
    }
}
playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();

// Plays a single round of Rock Paper Scissors to determine winner
// Determine the winner based on computer and player choice (win/tie/lose)
function playRound (playerSelection, computerSelection) {

if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection== "Scissors" && computerSelection == "Paper")
{
    return "You win";
}
else if (playerSelection == computerSelection)
{
    return "It's a tie!";
}
else
{
    return "You lose";
}
}

console.log (computerSelection);
console.log(playRound(playerSelection, computerSelection));
