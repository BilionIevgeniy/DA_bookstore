import { getFromLocalStorage } from "./store.js";
import { render } from "./templates.js";
import { addListeners } from "./listeners.js";

document.addEventListener("DOMContentLoaded", () => {
  getFromLocalStorage();
  render();
  addListeners();
});
