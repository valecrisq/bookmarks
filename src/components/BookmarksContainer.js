import React from 'react';
import { connect } from 'react-redux';
import BookmarksList from './BookmarksList';
import { removeBookmark } from '../action/bookmarks';

import '../styles/BookmarksContainer.css';

const BookmarksContainer = ({
  bookmarks,
  onBookmarkRemove,
}) => (
  <div>
    <div className="bookmarks-section">
      <h3 style={{ marginLeft: '1%' }}>Website</h3>
      <h3 style={{ marginLeft: '10%' }}>Address</h3>
    </div>
    <hr />
    <div className="bookmark-list">
      <BookmarksList bookmarks={bookmarks} onBookmarkRemove={onBookmarkRemove} />
    </div>
  </div>
);


const mapStateToProps = ({ bookmarks }) => ({ bookmarks });
const mapDispatchToProps = dispatch => ({
  onBookmarkRemove(bookmark) {
    dispatch(removeBookmark(bookmark));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BookmarksContainer);
