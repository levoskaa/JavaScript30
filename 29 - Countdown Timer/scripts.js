const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let countdown;

function timer(seconds) {
  // Clear existing timer so that at most one instance is running.
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainderSeconds
    .toString()
    .padStart(2, "0")}`;
  timerDisplay.textContent = formattedTime;
  document.title = formattedTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  let hours = end.getHours();
  const minutes = end.getMinutes().toString().padStart(2, "0");
  if (hours > 12) {
    hours -= 12;
  }
  endTime.textContent = `Be back at ${hours}:${minutes}`;
}

function onButtonClick() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function onCustomTimer(e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  timer(minutes * 60);
  this.reset();
}

buttons.forEach((button) => button.addEventListener("click", onButtonClick));
// If the element has a name there is no need to select it,
// it is available on the document. Just as named children of an
// element are available on the element itself.
document.customForm.addEventListener("submit", onCustomTimer);
