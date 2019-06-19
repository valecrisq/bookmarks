import React from 'react';
import BookmarkItem from './BookmarkItem';

import '../styles/BookmarksList.css';

const BookmarksList = ({ bookmarks, onBookmarkRemove }) => (
  bookmarks.map(bookmark => (
    <div className="bookmark" key={bookmark.link}>
      <button type="button" onClick={() => onBookmarkRemove(bookmark)}>
        <i className="fas fa-trash-alt fa-lg" />
      </button>
      <BookmarkItem bookmark={bookmark} />
    </div>
  ))
);

export default BookmarksList;
