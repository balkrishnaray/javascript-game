const timeLeftDisplay = document.querySelector("#time-left");
let resultDisplay = document.querySelector("#result");
const startPausebtn = document.querySelector("#start-pause-btn");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
let currentIndex = 76;
let width = 9;
let timerId;
function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      if (currentIndex - width >= 0) currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("move down");
      if (currentIndex - width < width * width) currentIndex += width;
      break;
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
function automoveElements() {
  logsLeft.forEach((logleft) => moveLogsLeft(logleft));
  logsRight.forEach((logright) => moveLogsRight(logright));
  carsLeft.forEach((carleft) => moveCarLeft(carleft));
  carsRight.forEach((carright) => moveCarRight(carright));
  lose();
}

function moveLogsLeft(logleft) {
  switch (true) {
    case logleft.classList.contains("l1"):
      logleft.classList.remove("l1");
      logleft.classList.add("l2");
      break;
    case logleft.classList.contains("l2"):
      logleft.classList.remove("l2");
      logleft.classList.add("l3");
      break;
    case logleft.classList.contains("l3"):
      logleft.classList.remove("l3");
      logleft.classList.add("l4");
      break;
    case logleft.classList.contains("l4"):
      logleft.classList.remove("l4");
      logleft.classList.add("l5");
      break;
    case logleft.classList.contains("l5"):
      logleft.classList.remove("l5");
      logleft.classList.add("l1");
      break;
    case logleft.classList.contains("l2"):
      logleft.classList.remove("l2");
      logleft.classList.add("l3");
      break;
  }
}

function moveLogsRight(logright) {
  switch (true) {
    case logright.classList.contains("l2"):
      logright.classList.remove("l2");
      logright.classList.add("l1");
      break;
    case logright.classList.contains("l3"):
      logright.classList.remove("l3");
      logright.classList.add("l2");
      break;
    case logright.classList.contains("l4"):
      logright.classList.remove("l4");
      logright.classList.add("l3");
      break;
    case logright.classList.contains("l1"):
      logright.classList.remove("l1");
      logright.classList.add("l5");
      break;

    case logright.classList.contains("l5"):
      logright.classList.remove("l5");
      logright.classList.add("l4");
      break;
  }
}

function moveCarLeft(carleft) {
  switch (true) {
    case carleft.classList.contains("c1"):
      carleft.classList.remove("c1");
      carleft.classList.add("c3");
      break;
    case carleft.classList.contains("c2"):
      carleft.classList.remove("c2");
      carleft.classList.add("c1");
      break;
    case carleft.classList.contains("c3"):
      carleft.classList.remove("c3");
      carleft.classList.add("c2");
      break;
  }
}
function moveCarRight(carright) {
  switch (true) {
    case carright.classList.contains("c1"):
      carright.classList.remove("c1");
      carright.classList.add("c2");
      break;
    case carright.classList.contains("c2"):
      carright.classList.remove("c2");
      carright.classList.add("c3");
      break;
    case carright.classList.contains("c3"):
      carright.classList.remove("c3");
      carright.classList.add("c1");
      break;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5")
  ) {
    resultDisplay.textContent = "You Lose!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
    squares[currentIndex].classList.remove("frog");
    console.log("lose function");
  }
}
timerId = setInterval(automoveElements, 1000);
