const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello, %s!", "Bob");

// Styled
console.log("%cI am some great text!", "font-size: 32px; color: blue;");

// warning!
console.warn("Oh, no!");

// Error :|
console.error("SHIT");

// Info
console.info("Crocodiles eat 3-4 people a year.");

// Testing
console.assert(1 === 2, "That is incorrect.");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(dog.name);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(dog.name);
});

// counting
console.count("Levos");
console.count("Steve");
console.count("Levos");
console.count("Bob");
console.count("Levos");
console.count("Levos");
console.count("Steve");
console.count("Levos");
console.count("Bob");
console.count("Levos");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/levoskaa")
  .then((response) => response.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log({ data });
  });

// table
console.table(dogs);
