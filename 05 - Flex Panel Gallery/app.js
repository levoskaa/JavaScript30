function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  // In some browsers the property name we are looking for can be different
  // so we use includes for the check.
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
