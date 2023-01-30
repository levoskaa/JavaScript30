const hero = document.querySelector(".hero");
const title = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // this is the hero (the element we attached the event listener to),
  // while e.target is the element which actually triggered the event.
  // The target can be any children of hero.
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  title.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 0, 255, 0.7)`;
}

hero.addEventListener("mousemove", shadow);
