const video = document.querySelector("video.viewer");
const controls = document.querySelector(".player__controls");
const playPause = document.querySelector(".player__button.toggle");
const volume = document.querySelector(".player__slider[name=volume]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playbackRate = document.querySelector(
  ".player__slider[name=playbackRate]"
);

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playPause.innerText = "⏸";
  } else {
    video.pause();
    playPause.innerHTML = "►";
  }
}

// Determine if browser supports the video element.
const supportsVideo = !!document.createElement("video").canPlayType;

if (supportsVideo) {
  // Hide the default controls.
  video.controls = false;
  // Display the custom video controls.
  controls.style.display = "flex";

  playPause.addEventListener("click", togglePlay);
}
