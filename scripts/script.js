import { getFromLocalStorage } from "./store/store.js";
import { addListeners } from "./listeners.js";
import { renderAllBooks } from "./render.js";

document.addEventListener("DOMContentLoaded", () => {
  getFromLocalStorage();
  renderAllBooks();
  addListeners();
});
