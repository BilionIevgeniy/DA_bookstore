import { renderAllBooks, renderComments, renderLikeBtn } from "../render.js";

export const ACTION_HANDLERS = {
  like: handleLikeAction,
  favorite: handleFavoriteAction,
  comment: handleCommentAction,
};

function handleLikeAction(booksState, { id }) {
  let newBook;
  const newBooksState = [
    ...booksState.map((book) => {
      if (id == book.id) {
        const liked = !book.liked;
        const likes = liked ? book.likes + 1 : book.likes - 1;
        newBook = { ...book, liked, likes };
        return newBook;
      }
      return book;
    }),
  ];
  renderLikeBtn(newBook);
  return newBooksState;
}

function handleFavoriteAction(booksState, { id }) {
  const newBooksState = [
    ...booksState.map((book) => {
      if (id == book.id) {
        return { ...book, favorite: !book.favorite };
      }
      return book;
    }),
  ];
  renderAllBooks(newBooksState);
  return newBooksState;
}

function handleCommentAction(booksState, { id, data: { comment, name } }) {
  let newBook;
  const newBooksState = [
    ...booksState.map((book) => {
      if (book.id == id) {
        newBook = {
          ...book,
          comments: [...book.comments, { name, comment }],
        };
        return newBook;
      } else {
        return book;
      }
    }),
  ];
  renderComments(newBook);
  return newBooksState;
}
