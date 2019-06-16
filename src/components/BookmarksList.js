import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarksList = ({bookmarks, onBookmarkRemove}) => {
    return(
        bookmarks.map((bookmark) => {
            return (
                <div key={bookmark.link} onClick={() => onBookmarkRemove(bookmark)}>
                    <BookmarkItem bookmark={bookmark} />
                </div>
            )
        })
    )
};

export default BookmarksList;
