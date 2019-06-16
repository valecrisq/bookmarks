import React from 'react';
import { connect } from 'react-redux';


const BookmarksContainer = ({ bookmarks }) => {
    return <BookmarksList bookmarks={bookmarks} />;
};

const mapStateToProps = ({ bookmarks }) => ({ bookmarks });
export default connect(mapStateToProps)(BookmarksContainer);
