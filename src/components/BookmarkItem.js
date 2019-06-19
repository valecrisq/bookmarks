import React from 'react';

import '../styles/BookmarkItem.css';

const BookmarkItem = ({ bookmark }) => (
  <ul className="bookmark-info">
    <div className="title-container">
      <div className="title">{bookmark.title}</div>
    </div>
    <div className="link-container">
      <a href={bookmark.link} className="link">{bookmark.link}</a>
    </div>
  </ul>
);

export default BookmarkItem;
