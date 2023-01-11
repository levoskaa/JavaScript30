function playSound(e) {
  // keyCode is deprecated, but the starter files were created
  // based on keyCode, so I'm keeping it here.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }

  // Always start playing the audio from the beginning.
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function deactivateKey(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", deactivateKey));
