const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

function onPositionUpdate(data) {
  speed.textContent = round(data.coords.speed, 2) ?? 0;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}

function round(num, decimalPlaces) {
  return (
    Math.round((num + Number.EPSILON) * 10 ** decimalPlaces) /
    10 ** decimalPlaces
  );
}

navigator.geolocation.watchPosition(onPositionUpdate, (err) => {
  console.error(err);
  alert("Hey! You gotta allow that to happen!");
});
