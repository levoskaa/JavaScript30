window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "hu-HU";
recognition.maxAlternatives = 1;
const words = document.querySelector(".words");

let p = document.createElement("p");
words.appendChild(p);

function onSpeech(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join(" ");
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
}

recognition.addEventListener("result", onSpeech);
recognition.addEventListener("end", recognition.start);

recognition.start();
