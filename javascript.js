function getRandomNumber () {
  return Math.ceil(Math.random() * 3);
}

function getComputerChoice (randomNumber) {
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

playerSelection = prompt ("What is your choice?").toLowerCase;


const randomNumber = getRandomNumber();
const computerSelection = getComputerChoice(randomNumber);
console.log(computerSelection);
console.log(playerSelection);

// function that plays a single round of RPS which takes two parameters: playerSelection and computerSelection and returns string declaring winner like so "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).



// function playRound(playerSelection, computerSelection) {
    // your code here!
//  }
//   
//  const playerSelection = "rock";
//  const computerSelection = getComputerChoice();
//  console.log(playRound(playerSelection, computerSelection));


  // Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.