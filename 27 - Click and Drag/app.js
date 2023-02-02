const slider = document.querySelector(".items");
let isMouseDown = false;
let startX;
let scrollLeft;

function initiateDrag(e) {
  setMouse(true);
  this.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function endDrag() {
  setMouse(false);
  this.classList.remove("active");
}

function setMouse(isDown) {
  isMouseDown = isDown;
}

function drag(e) {
  if (!isMouseDown) {
    return;
  }
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener("mousedown", initiateDrag);
slider.addEventListener("mouseup", endDrag);
slider.addEventListener("mouseleave", endDrag);
slider.addEventListener("mousemove", drag);
