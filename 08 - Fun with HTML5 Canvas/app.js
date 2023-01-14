const MIN_LINE_WIDTH = 10;
const MAX_LINE_WIDTH = 80;

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MIN_LINE_WIDTH;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidthDirection = 1;

function draw(e) {
  if (!isDrawing) {
    return;
  }

  doDraw(e);
  updateDrawParameters(e);
}

function doDraw(e) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // Begin line here.
  ctx.moveTo(lastX, lastY);
  // End line here.
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function updateDrawParameters(e) {
  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.lineWidth += lineWidthDirection;
  hue++;
  if (ctx.lineWidth <= MIN_LINE_WIDTH) {
    lineWidthDirection = 1;
  }
  if (ctx.lineWidth >= MAX_LINE_WIDTH) {
    lineWidthDirection = -1;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousemove", draw);
