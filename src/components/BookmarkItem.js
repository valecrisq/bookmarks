import React from 'react';

const BookmarkItem = ({bookmark}) => {
    return(
        <div>
            <h3>{bookmark.title}</h3>
            <h3>{bookmark.link}</h3>
        </div>
    )
};

export default BookmarkItem;
