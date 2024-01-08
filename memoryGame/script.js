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

const cardChosen = [];
const cardChosenIds = [];
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
  console.log(cardChosen);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (cardChosen[0] === cardChosen[1]) {
    console.log("its a match");
  }
}
