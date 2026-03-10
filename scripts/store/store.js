import { initialBooks } from "../../db.js";
import { ACTION_HANDLERS } from "./actions.js";

export let booksState = [...initialBooks];

export function applyAction(action, payload = {}) {
  const handler =
    ACTION_HANDLERS[action] ||
    function () {
      console.warn("no action: " + action);
    };
  booksState = handler(booksState, payload);
  saveToLocalStorage();
}

export function saveToLocalStorage() {
  localStorage.setItem("booksState", JSON.stringify(booksState));
}

export function getFromLocalStorage() {
  const lsState = JSON.parse(localStorage.getItem("booksState"));
  if (lsState) {
    Object.assign(booksState, lsState);
  }
}
