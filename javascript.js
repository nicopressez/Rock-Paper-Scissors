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
}
console.log(getComputerChoice());

// Plays a single round of Rock Paper Scissors //
function playRound (playerSelection, computerSelection) {
    
}

// Plays until someone reaches 5 points, then winner message //