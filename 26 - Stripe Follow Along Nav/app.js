const triggers = document.querySelectorAll(".cool > li");
const dropBg = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  dropBg.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownRect = dropdown.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  const coords = {
    width: dropdownRect.width,
    height: dropdownRect.height,
    left: dropdownRect.left - navRect.left,
    top: dropdownRect.top - navRect.top,
  };
  dropBg.style.width = coords.width + "px";
  dropBg.style.height = coords.height + "px";
  dropBg.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  dropBg.classList.remove("open");
}

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", handleEnter);
  trigger.addEventListener("mouseleave", handleLeave);
});
