import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBookmark } from '../action/bookmarks';

const BookmarksForm = ({ bookmarks, dispatch }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!bookmarks.find(bookmark => bookmark.link === link)) {
        dispatch(addBookmark({title, link}));
    } else {
        alert('Link Already Exists!')
    }
  };


  return (
    <form onSubmit={event => handleSubmit(event)}>
      <button type="submit" />
      <input type="text" onChange={event => setTitle(event.target.value)} />
      <input type="text" onChange={event => setLink(event.target.value)} />
    </form>
  );
};

const mapStateToProps = ({bookmarks}) => ({bookmarks});
export default connect(mapStateToProps)(BookmarksForm);
