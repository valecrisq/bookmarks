import React from 'react';
import { connect } from 'react-redux';
import BookmarksList from './BookmarksList';
import {removeBookmark} from "../action/bookmarks";

const BookmarksContainer = ({ bookmarks, onBookmarkRemove }) => {
    return <BookmarksList bookmarks={bookmarks} onBookmarkRemove={onBookmarkRemove} />;
};


const mapStateToProps = ({ bookmarks }) => ({ bookmarks });
const mapDispatchToProps = (dispatch) => {
    return {
        onBookmarkRemove(bookmark) {
            dispatch(removeBookmark(bookmark));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookmarksContainer);
