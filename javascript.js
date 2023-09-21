
const computerSelection = getComputerChoice();
const playerSelection = prompt("What is your choice?").toLowerCase();

console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection))


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

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie"
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock!"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors!"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock!"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper!"
  } else if (playerSelection === "Scissors" && computerSelection === "rock") {
    return "You win! Rock beats beats scissors!"
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You win! Scissors beat paper!"
  } else {
    return "Fatal error"
  }
}
