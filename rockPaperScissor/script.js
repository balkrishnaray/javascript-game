const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const Result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let i;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    randomNumberGenerator();
    getResult();
  })
);

function randomNumberGenerator() {
  let choice = ["rock", "paper", "scissor"];
  let i = Math.floor(Math.random() * choice.length);
  computerChoice = choice[i];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "you lose";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "you win";
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "you win";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "you lose";
  }
  Result.innerHTML = result;
}
