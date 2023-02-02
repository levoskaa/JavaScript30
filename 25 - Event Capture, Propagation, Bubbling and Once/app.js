const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  // Stop bubbling
  //   e.stopPropagation();
  console.log(this.classList.value);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    // When true, the function runs during capture and
    // not during bubbling.
    capture: false,
    // When true, the event listener will only run once, then it unbinds itself.
    once: false,
  })
);
button.addEventListener("click", () => console.log("Click!!!"), { once: true });
