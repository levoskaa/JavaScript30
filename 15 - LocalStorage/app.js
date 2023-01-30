const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const manageItems = document.querySelector(".manage-items");
const clearBtn = manageItems.querySelector("input[name=clear]");
const checkBtn = manageItems.querySelector("input[name=check]");
const uncheckBtn = manageItems.querySelector("input[name=uncheck]");

let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  // Prevent page from reloading on submit.
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  updateItems();
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

function clearItems() {
  items = [];
  updateItems();
}

function setItemsState(done) {
  items.forEach((item) => (item.done = done));
  updateItems();
}

function updateItems() {
  displayList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clearBtn.addEventListener("click", clearItems);
checkBtn.addEventListener("click", () => setItemsState(true));
uncheckBtn.addEventListener("click", () => setItemsState(false));

displayList(items, itemsList);
