const secretCode = "levos";
const pressedKeys = [];

function onKeyUp(e) {
  pressedKeys.push(e.key);
  // Trim pressedKeys to be the same length as secretCode.
  pressedKeys.splice(0, pressedKeys.length - secretCode.length);
  if (pressedKeys.join("") === secretCode) {
    console.log("DING DING!");
    cornify_add();
  }
}

window.addEventListener("keyup", onKeyUp);
