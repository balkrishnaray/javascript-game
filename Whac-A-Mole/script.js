const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const startBtn = document.querySelector("#start-btn");
let result = 0;
let hitPosition;
let currentTime = 30;
let timer = null;
let countdownTimerId;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquarebox = squares[Math.floor(Math.random() * 9)];
  randomSquarebox.classList.add("mole");
  hitPosition = randomSquarebox.id;
}
function moveMole() {
  timer = setInterval(randomSquare, 500);
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = "Your Score : " + result;
      hitPosition = null;
    }
  });
});

function countDown() {
  currentTime--;
  timeLeft.textContent = "Time left: " + currentTime;
  if (currentTime == 0) {
    clearInterval(countdownTimerId);
    clearInterval(timer);
    alert("Game Over! your final score is " + result);
  }
}

startBtn.addEventListener("click", function () {
  currentTime = 30;
  result = 0;
  countdownTimerId = setInterval(countDown, 1000);
  moveMole();
});
