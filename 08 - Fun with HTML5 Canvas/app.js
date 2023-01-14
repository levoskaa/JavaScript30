const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    return;
  }

  ctx.beginPath();
  // Begin line here.
  ctx.moveTo(lastX, lastY);
  // End line here.
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousemove", draw);
