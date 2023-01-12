let secondHandFullRotations = 0;
let minuteHandFullRotations = 0;
let hourHandFullRotations = 0;

function updateClock() {
  const now = new Date();
  updateSecondHand(now.getSeconds());
  updateMinuteHand(now.getMinutes());
  updateHourHand(now.getHours());
}

function updateSecondHand(seconds) {
  const secondHand = document.querySelector(".second-hand");
  if (seconds === 0) {
    secondHandFullRotations++;
  }
  // Full rotations*360 to prevent backwards rotation when going from 59 to 0.
  // +90 because of the initial rotation to start the hands in a vertical position.
  // /60 and *360 to scale seconds in 0-59 to degrees in 0-359.
  const secondsDegree =
    secondHandFullRotations * 360 + 90 + (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

function updateMinuteHand(minutes) {
  const minuteHand = document.querySelector(".min-hand");
  if (minutes === 0) {
    minuteHandFullRotations++;
  }
  // Full rotations*360 to prevent backwards rotation when going from 59 to 0.
  // +90 because of the initial rotation to start the hands in a vertical position.
  // /60 and *360 to scale minutes in 0-59 to degrees in 0-359.
  const minutesDegree =
    minuteHandFullRotations * 360 + 90 + (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
}

function updateHourHand(hours) {
  const hourHand = document.querySelector(".hour-hand");
  if (hours === 0) {
    hourHandFullRotations++;
  }
  // Full rotations*360 to prevent backwards rotation when going from 23 to 0.
  // +90 because of the initial rotation to start the hands in a vertical position.
  // /24 and *360 to scale hours in 0-23 to degrees in 0-359.
  const hoursDegree = hourHandFullRotations * 360 + 90 + (hours / 24) * 360;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

// Update clock on page load without first waiting for a second to pass.
updateClock();
setInterval(updateClock, 1000);
