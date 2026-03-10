import { booksState, getFromLocalStorage } from "./store.js";
import { addListeners } from "./listeners.js";
import { generateBookTemplate } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  getFromLocalStorage();
  render();
  addListeners();
});

export function render() {
  const container = document.querySelector(".books-wrapper");

  container.innerHTML = [...booksState]
    .sort((a, b) => b.favorite - a.favorite)
    .map((book) => generateBookTemplate(book))
    .join("");
}
