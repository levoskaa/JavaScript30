const bandsContainer = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function strip(string) {
  const articleRegex = /^(an?|the)\s/i;
  return string.replace(articleRegex, "").trim();
}

bands.sort((a, b) => {
  a = strip(a);
  b = strip(b);
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
});

bandsContainer.innerHTML = bands.map((band) => `<li>${band}</li>`).join("");
