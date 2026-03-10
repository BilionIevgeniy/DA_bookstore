import { booksState } from "./store/store.js";
import { generateBookTemplate } from "./templates.js";

export function renderAllBooks(books = booksState) {
  const container = document.querySelector(".books-wrapper");

  container.innerHTML = [...books]
    .sort((a, b) => b.favorite - a.favorite)
    .map((book) => generateBookTemplate(book))
    .join("");
}

export function renderBook(newBook) {
  const newBookElement = document.querySelector(`[data-id='${newBook.id}']`);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = generateBookTemplate(newBook);
  const newCard = tempDiv.firstElementChild;
  newBookElement.replaceWith(newCard);
}
