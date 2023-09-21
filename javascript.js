let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let randomNumber = Math.ceil(Math.random() * 3)
  let choice  
  if (randomNumber === 1) {
      choice = "rock";
    } else if (randomNumber === 2) {
      choice = "paper"
    } else if (randomNumber === 3) {
      choice = "scissors"
    }
   return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if ((playerSelection === "rock" && computerSelection === "paper") || 
             (playerSelection === "paper" && computerSelection === "scissors") ||
             (playerSelection === "scissors" && computerSelection === "rock")) {
    computerScore++;
    return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
    return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
  } else {
    return "Fatal error";
  }
}

function game () {
  for (let i = 0; i < 5 ; i++) { 
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("What is your choice?").toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore > computerScore) {
  console.log ("You win the game!");
} else if (computerScore > playerScore) {
  console.log ("You lose the game!");
} else {
  console.log ("It's a tie");
}}

game()