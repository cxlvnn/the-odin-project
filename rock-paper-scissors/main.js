const opts = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = Math.round(Math.random() * 2);
  return opts[choice];
}

function getHumanChoice() {
  const choice = window.prompt("Enter your choice");
  // if (!opts.includes(choice.toLowerCase())) {
  //   console.log("Please enter a valid options. (rock, paper, scissors)");
  //   return;
  // }
  return choice;
}

console.log("You chose: ", getHumanChoice());
console.log("Computer chose: ", getComputerChoice());
