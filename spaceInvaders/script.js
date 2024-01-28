const grid = document.querySelector(".grid");
const Result = document.querySelector("#result");
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invaderId;
let goingRight = true;
let goingLeft = true;
for (i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];
function draw() {
  for (i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invaders");
  }
}
function remove() {
  for (i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invaders");
  }
}
draw();
// document.addEventListener("keydown", moveShooter);

// squares[currentShooterIndex].classList.add("shooter");

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex--;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex++;
      break;
  }
  squares[currentShooterIndex].classList.add("shooter");
}

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0;
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1;
  remove();
  if (rightEdge && goingRight) {
    for (i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      goingRight = false;
    }
  } else if (leftEdge && !goingRight) {
    for (i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1;
      goingRight = true;
    }
  }

  for (i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }
  draw();

  if (squares[currentShooterIndex].classList.contains("invaders", "shooter")) {
    Result.innerHTML = "Game Over!";
    clearInterval(invaderId);
  }

  for (i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length) {
      Result.innerHTML = "Game Over!";
    }
  }
}
invaderId = setInterval(moveInvaders, 50);
