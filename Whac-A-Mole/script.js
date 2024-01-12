const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
let result = 0;
let hitPosition;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquarebox = squares[Math.floor(Math.random() * 9)];
  randomSquarebox.classList.add("mole");
  hitPosition = randomSquarebox.id;
}
function moveMole() {
  let timer = null;
  timer = setInterval(randomSquare, 500);
}
moveMole();

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});
