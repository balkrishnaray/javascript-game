const cardArray = [
  { name: "avocado", img: "img/avocado.jpg" },
  { name: "banana", img: "img/banana.jpg" },
  { name: "cherry", img: "img/cherry.jpg" },
  { name: "lemon", img: "img/lemon.jpg" },
  { name: "orange", img: "img/orange.jpg" },
  { name: "pineapple", img: "img/pineapple.jpg" },
  { name: "strawberry", img: "img/strawberry.jpg" },
  { name: "avocado", img: "img/avocado.jpg" },
  { name: "banana", img: "img/banana.jpg" },
  { name: "cherry", img: "img/cherry.jpg" },
  { name: "lemon", img: "img/lemon.jpg" },
  { name: "orange", img: "img/orange.jpg" },
  { name: "pineapple", img: "img/pineapple.jpg" },
  { name: "strawberry", img: "img/strawberry.jpg" },
];
let resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/plain.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function flipcard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  console.log(cardChosen);
  console.log(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOne = cardChosenIds[0];
  const optionTwo = cardChosenIds[1];
  if (optionOne == optionTwo) {
    cards[optionOne].setAttribute("src", "img/plain.jpg");
    alert("you have clicked the same image");
    cardChosen = [];
    cardChosenIds = [];
    return;
  }

  if (cardChosen[0] == cardChosen[1]) {
    alert("It's a match!");
    cards[optionOne].setAttribute("src", "img/white.png");
    cards[optionTwo].setAttribute("src", "img/white.png");
    cards[optionOne].removeEventListener("click", flipcard);
    cards[optionTwo].removeEventListener("click", flipcard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOne].setAttribute("src", "img/plain.jpg");
    cards[optionTwo].setAttribute("src", "img/plain.jpg");
  }
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "congratulations you have found them all!";
  }
}
