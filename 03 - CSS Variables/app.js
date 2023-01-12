function onValueChange() {
  const suffix = this.dataset.sizing ?? "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

const inputs = document.querySelectorAll(".controls input");
inputs.forEach((input) => input.addEventListener("change", onValueChange));
// The change event only fires when the user stops interacting with the input.
// We use the mousemove event to update the values while the user is still interacting with it.
inputs.forEach((input) => input.addEventListener("mousemove", onValueChange));
