window.addEventListener("keydown", (e) => {
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
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") {
      return;
    }
    key.classList.remove("playing");
  })
);
