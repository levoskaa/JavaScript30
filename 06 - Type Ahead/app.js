function onSearch() {
  if (!this.value) {
    const suggestionsList = document.querySelector(".suggestions");
    suggestionsList.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
    return;
  }
  const matches = findMatches(this.value, cities);
  displayMatches(matches, this.value);
}

function findMatches(searchTerm, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(searchTerm, "i");
    return regex.test(city.city) || regex.test(city.state);
  });
}

function displayMatches(matches, searchTerm) {
  const generatedHtml = matches
    .map((match) => matchToHtml(match, searchTerm))
    .join("");
  const suggestionsList = document.querySelector(".suggestions");
  suggestionsList.innerHTML = generatedHtml;
}

function matchToHtml(match, searchTerm) {
  return `
    <li>
      <span class="name">
        ${highlight(match.city, searchTerm)},
        ${highlight(match.state, searchTerm)}
      </span>
      <span class="population">
        ${formatWithThousandSeparator(match.population)}
      </span>
    </li>
  `;
}

function highlight(string, term) {
  const regex = new RegExp(`(${term})`, "gi");
  return string.replace(regex, '<span class="hl">$1</span>');
}

function formatWithThousandSeparator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const searchField = document.querySelector(".search");

fetch(endpoint)
  .then((response) => response.json())
  .then((responseCities) => cities.push(...responseCities));

searchField.addEventListener("change", onSearch);
searchField.addEventListener("keyup", onSearch);
