const timeNodes = [...document.querySelectorAll("[data-time]")];

const totalSeconds = timeNodes
  .map((timeNode) => timeNode.dataset.time)
  .map((timeCode) => {
    const [mins, seconds] = timeCode.split(":").map((num) => parseInt(num));
    return mins * 60 + seconds;
  })
  .reduce((sum, current) => sum + current, 0);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
