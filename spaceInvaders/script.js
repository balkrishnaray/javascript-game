const grid = document.querySelector(".grid");
const ResultDisplay = document.querySelector("#result");
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invaderId;
let goingRight = true;
let goingLeft = true;
let aliensRemoved = [];
let results = 0;
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
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add("invaders");
    }
  }
}
draw();

squares[currentShooterIndex].classList.add("shooter");

function remove() {
  for (i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invaders");
  }
}

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
document.addEventListener("keydown", moveShooter);

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
  }
  if (leftEdge && !goingRight) {
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

  if (squares[currentShooterIndex].classList.contains("invaders")) {
    ResultDisplay.innerHTML = "GAME OVER!";
    clearInterval(invaderId);
  }

  for (i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length) {
      ResultDisplay.innerHTML = "GAME OVER!";
      clearInterval(invaderId);
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    ResultDisplay.innerHTML = "YOU WIN!";
    clearInterval(invaderId);
    document.removeEventListener("keydown", moveShooter);
    document.removeEventListener("keydown", shoot);
  }
}
invaderId = setInterval(moveInvaders, 300);

function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;
  function moveLaser() {
    squares[currentLaserIndex].classList.remove("laser");
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add("laser");

    if (squares[currentLaserIndex].classList.contains("invaders")) {
      squares[currentLaserIndex].classList.remove("laser");
      squares[currentLaserIndex].classList.remove("invaders");
      squares[currentLaserIndex].classList.add("boom");

      setTimeout(() => {
        squares[currentLaserIndex].classList.remove("boom"), 500;
        clearInterval(laserId);

        const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
        aliensRemoved.push(alienRemoved);
        results++;
        ResultDisplay.innerHTML = results;
      });
    }
  }
  switch (e.key) {
    case "ArrowUp":
      laserId = setInterval(moveLaser, 100);
  }
}

document.addEventListener("keydown", shoot);
