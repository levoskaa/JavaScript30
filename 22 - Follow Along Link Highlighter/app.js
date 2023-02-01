// Everything that needs to have a background when hovered.
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function addHighlight() {
  const rect = this.getBoundingClientRect();
  const coords = {
    width: rect.width,
    height: rect.height,
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", addHighlight)
);
