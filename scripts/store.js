import { initialBooks } from "../db.js";

export let booksState = [...initialBooks];

export function applyAction(action, { id, data: { comment, name } = {} }) {
  switch (action) {
    case "like": {
      booksState = [
        ...booksState.map((book) => {
          if (id == book.id) {
            const liked = !book.liked;
            const likes = liked ? book.likes + 1 : book.likes - 1;
            return { ...book, liked, likes };
          }
          return book;
        }),
      ];
      break;
    }
    case "favorite": {
      booksState = [
        ...booksState.map((book) => {
          if (id == book.id) {
            return { ...book, favorite: !book.favorite };
          }
          return book;
        }),
      ];
      break;
    }
    case "comment": {
      booksState = [
        ...booksState.map((book) =>
          book.id == id
            ? {
                ...book,
                comments: [...book.comments, { name, comment }],
              }
            : book,
        ),
      ];
      break;
    }
  }
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
