export function generateBookTemplate(book) {
  const {
    id,
    favorite,
    name,
    author,
    likes,
    liked,
    price,
    publishedYear,
    genre,
    comments,
  } = book;
  return /*html*/ `
     <div class="book-card" data-id="${id}">
        <h2 class="book-title">${name}</h2>

        <div class="book-img">
          <img src="assets/img/book.jpg" alt="Book Cover">
        </div>

        <div class="stats-panel">
          <span class="price">${Number(price).toFixed(2)} €</span>
          <div class="likes-container">
            <span class="likes-count">${likes}</span>
            <button class="like-btn ${liked ? "active" : ""}" data-action="like">
              <svg class="heart-icon" viewBox="0 0 24 24">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button class="favorite-btn ${favorite ? "active" : ""}" data-action="favorite">
              <svg class="favorite-icon" viewBox="0 0 24 24" width="24" height="24">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="book-details">
          <p><strong>Author:</strong> <span>${author}</span></p>
          <p><strong>Erscheinungsjahr:</strong> <span>${publishedYear}</span></p>
          <p><strong>Genre:</strong> <span>${genre}</span></p>
        </div>

        <div class="comments-section">
          <h3>Kommentare:</h3>
          <ul class="comments-list">
          ${generateCommentTemplate(comments)}
          </ul>

          <form class="comment-form">
            <div class="input-group">
              <input required type="text" name="name" placeholder="Dein Name..." autocomplete="off">
              <input required type="text" name="comment" placeholder="Schreibe dein Kommentar..." autocomplete="off">
              <button type="submit" class="save-comment" disabled>
                <svg class="send-icon" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
  `;
}

export function generateCommentTemplate(comments) {
  return comments.length
    ? comments
        .map(({ name, comment }) => {
          return `<li>
                <strong>[${name}]:</strong> ${comment}
              </li>`;
        })
        .join("")
    : "<p>kein Kommentar</p>";
}
