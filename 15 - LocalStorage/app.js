const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  // Prevent page from reloading on submit.
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  displayList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (!e.target.matches("input")) {
    return;
  }
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
}

function displayList(items = [], destination) {
  destination.innerHTML = items
    .map((item, i) => {
      return `
        <li>
          <input type="checkbox" id="item${i}" data-index="${i}" ${
        item.done ? "checked" : ""
      }/>
          <label for="item${i}">${item.text}</label>
        </li>`;
    })
    .join("");
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

displayList(items, itemsList);
