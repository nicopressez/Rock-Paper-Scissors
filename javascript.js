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
console.log(getPlayerChoice());
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

// Plays a single round of Rock Paper Scissors to determine winner
function playRound (playerSelection, computerSelection) {
    
}

// Determine the winner based on computer and player input
