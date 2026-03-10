import { applyAction } from "./store/store.js";

const saveCommentBtns = document.querySelectorAll(".save-comment");
const bookWrapper = document.querySelector(".books-wrapper");
saveCommentBtns.forEach((btn) => (btn.disabled = true));

function onComment(event) {
  event.preventDefault();
  const bookCard = event.target.closest(".book-card");
  const form = event.target.closest("form");

  if (bookCard && form) {
    const { id } = bookCard.dataset;
    const formData = new FormData(form);
    const { name, comment } = Object.fromEntries(formData.entries());
    applyAction("comment", { id, data: { comment, name } });
    form.reset();
  }
}

function onFormInput(event) {
  const form = event.target.closest("form");

  if (form) {
    const btn = form.querySelector(".save-comment");
    btn.disabled = !form.checkValidity();
  }
}

function onAction(event) {
  const { action } = event.target.closest("[data-action]")?.dataset || {};
  if (!action) return;

  const bookCard = event.target.closest(".book-card");
  const form = bookCard?.querySelector(".comment-form");
  const { id } = bookCard.dataset;

  if (id && form) {
    applyAction(action, { id });
  }
}

export function addListeners() {
  bookWrapper.addEventListener("submit", onComment);
  bookWrapper.addEventListener("input", onFormInput);
  bookWrapper.addEventListener("click", onAction);
}
