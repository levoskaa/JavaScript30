let isShiftDown = false;
let lastCheckboxChecked = undefined;

function checkShiftButton(e) {
  if (e.key === "Shift") {
    isShiftDown = !isShiftDown;
  }
}

function onCheckboxChange() {
  if (isShiftDown && lastCheckboxChecked) {
    checkAllInBetween(this, lastCheckboxChecked);
  }
  // If we checked the current checkbox then set it as the last one checked.
  // Otherwise, reset the last one checked.
  lastCheckboxChecked = this.checked ? this : undefined;
}

function checkAllInBetween(checkbox1, checkbox2) {
  const indexes = [
    checkboxes.indexOf(checkbox1),
    checkboxes.indexOf(checkbox2),
  ];
  indexes.sort();
  for (let i = indexes[0]; i < indexes[1]; i++) {
    checkboxes[i].checked = true;
  }
}

const checkboxes = Array.from(
  document.querySelectorAll(".inbox input[type=checkbox]")
);

document.addEventListener("keydown", checkShiftButton);
document.addEventListener("keyup", checkShiftButton);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", onCheckboxChange)
);
