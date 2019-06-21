import React from 'react';

import '../styles/BookmarkItem.css';

const BookmarkItem = ({ bookmark }) => {
  const { link } = bookmark;
  const bookmarklink = link.replace(/\s+/g, '');


  return (
    <ul className="bookmark-info">
      <div className="title-container">
        <div className="title">{bookmark.title}</div>
      </div>
      <div className="link-container">
        <a href={bookmarklink} className="link">{bookmarklink}</a>
      </div>
    </ul>
  );
};

export default BookmarkItem;
