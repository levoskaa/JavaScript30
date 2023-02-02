const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMove(e) {
  const yPercent = (e.pageY - this.offsetTop) / this.offsetHeight;
  const height = Math.round(yPercent * 100) + "%";
  bar.style.height = height;
  const min = 0.4;
  const max = 4;
  const playbackRate = min + (max - min) * yPercent;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
