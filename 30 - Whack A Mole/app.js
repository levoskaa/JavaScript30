const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  let hole = holes[idx];
  if (hole === lastHole) {
    hole = randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  let hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  resetGame();
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function resetGame() {
  score = 0;
  timeUp = false;
  scoreBoard.textContent = score;
}

function bonk(e) {
  if (!e.isTrusted) {
    // If the event doesn't come from the user's mouse (= it's faked).
    return;
  }
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
