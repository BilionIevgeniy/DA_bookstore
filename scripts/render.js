import { booksState } from "./store/store.js";
import { generateBookTemplate, generateCommentTemplate } from "./templates.js";

export function renderAllBooks(books = booksState) {
  const container = document.querySelector(".books-wrapper");

  container.innerHTML = [...books]
    .sort((a, b) => b.favorite - a.favorite)
    .map((book) => generateBookTemplate(book))
    .join("");
}

export function renderComments(newBook) {
  const commentsLength = newBook.comments.length;
  const { name, comment } = newBook.comments[commentsLength - 1];
  const newBookElement = document.querySelector(`[data-id='${newBook.id}']`);
  const commentsList = newBookElement.querySelector(".comments-list");
  const tempDiv = document.createElement("div");
  const li = `<li>
      <strong>[${name}]:</strong> ${comment}
    </li>`;
  tempDiv.innerHTML = li;
  const newComment = tempDiv.firstElementChild;
  commentsLength == 1
    ? (commentsList.innerHTML = li)
    : commentsList.appendChild(newComment);
}

export function renderLikeBtn(newBook) {
  const newBookElement = document.querySelector(`[data-id='${newBook.id}']`);
  const likeBtn = newBookElement.querySelector(".like-btn");
  const likesCount = newBookElement.querySelector(".likes-count");
  likeBtn.classList.toggle("active");
  likesCount.innerHTML = newBook.likes;
}
