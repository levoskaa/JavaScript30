const player = document.querySelector(".player");
const video = document.querySelector("video.viewer");
const controlsContainer = document.querySelector(".player__controls");
const playPause = document.querySelector(".player__button.toggle");
const volume = document.querySelector(".player__slider[name=volume]");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playbackRate = document.querySelector(
  ".player__slider[name=playbackRate]"
);
const skipButtons = document.querySelectorAll(".player__button[data-skip]");
const fullscreenButton = document.querySelector(".player__button.full-screen");

let inactiveTimeoutId;

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayPauseButton() {
  playPause.innerText = video.paused || video.ended ? "►" : "⏸";
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

function scrub(e) {
  // e.buttons for mousemove and e.button for click.
  // The type check is needed because e.button is always 0 for mousemove.
  const isMouseLeftDown =
    e.buttons & 1 || (e.type === "click" && e.button === 0);
  if (isMouseLeftDown) {
    doScrub(e);
  }
}

function doScrub(e) {
  const position = e.offsetX / progress.offsetWidth;
  video.currentTime = video.duration * position;
}

function toggleFullscreen() {
  if (document.fullscreenElement !== null) {
    // The document is in fullscreen mode.
    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    // The document is not in fullscreen mode.
    player.requestFullscreen();
    setFullscreenData(true);
  }
}

function onFullscreenChange() {
  const isFullscreen = !!document.fullscreenElement;
  setFullscreenData(isFullscreen);
  if (isFullscreen) {
    inactiveTimeoutId = setFullscreenTimeout();
  } else {
    clearTimeout(inactiveTimeoutId);
    inactiveTimeoutId = undefined;
  }
}

function setFullscreenData(state) {
  player.setAttribute("data-fullscreen", state);
}

function onPlayerMousemove() {
  if (inactiveTimeoutId) {
    clearFullscreenTimeout();
  }
  inactiveTimeoutId = setFullscreenTimeout();
}

function setFullscreenTimeout() {
  return setTimeout(() => {
    player.style.cursor = "none";
    controlsContainer.classList.add("inactive");
  }, 2000);
}

function clearFullscreenTimeout() {
  clearTimeout(inactiveTimeoutId);
  player.style.cursor = "auto";
  controlsContainer.classList.remove("inactive");
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
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", scrub);
  fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", onFullscreenChange);
  player.addEventListener("mousemove", () => {
    if (document.fullscreenElement) {
      onPlayerMousemove();
    }
  });
}

const supportsFullscreen = document.fullscreenEnabled;
if (!supportsFullscreen) {
  fullscreenButton.style.display = "none";
}
