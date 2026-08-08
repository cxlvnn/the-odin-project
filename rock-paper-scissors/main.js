const opts = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.round(Math.random() * 2);
  return opts[choice];
}

function getHumanChoice() {
  const choice = window.prompt("Enter your choice");
  if (!opts.includes(choice.toLowerCase())) {
    console.log("Please enter a valid options. (rock, paper, scissors)");
    return;
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log("humanchoice: ", humanChoice);
  console.log("computercoice: ", computerChoice);
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Computer wins the round");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Computer wins the round");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Computer wins the round");
    computerScore++;
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    console.log("You win the round");
    humanScore++;
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    console.log("You win the round");
    humanScore++;
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    console.log("You win the round");
    humanScore++;
  } else {
    console.log("It's a tie");
  }
}

playRound(getHumanChoice(), getComputerChoice());
