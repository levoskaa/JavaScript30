const video = document.querySelector("video.viewer");
const controlsContainer = document.querySelector(".player__controls");
const playPause = document.querySelector(".player__button.toggle");
const volume = document.querySelector(".player__slider[name=volume]");
const progressBar = document.querySelector(".progress__filled");
const playbackRate = document.querySelector(
  ".player__slider[name=playbackRate]"
);
const skipButtons = document.querySelectorAll(".player__button[data-skip]");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayPauseButton() {
  playPause.innerText = video.paused || video.ended ? "►" : "❚❚";
}

function updateVolume() {
  video.volume = this.value;
}

function skip() {
  const skipAmount = Number(this.dataset.skip);
  video.currentTime += skipAmount;
}

function updatePlaybackRate() {
  video.playbackRate = this.value;
}

function updateProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = progressPercent + "%";
}

// Determine if browser supports the video element.
const supportsVideo = !!document.createElement("video").canPlayType;

if (supportsVideo) {
  // Hide the default controls.
  video.controls = false;
  // Display the custom video controls.
  controlsContainer.style.display = "flex";

  playPause.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updatePlayPauseButton);
  video.addEventListener("pause", updatePlayPauseButton);
  volume.addEventListener("input", updateVolume);
  skipButtons.forEach((skipButton) => {
    skipButton.addEventListener("click", skip);
  });
  playbackRate.addEventListener("input", updatePlaybackRate);
  video.addEventListener("timeupdate", updateProgress);
}
