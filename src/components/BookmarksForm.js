import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBookmark } from '../action/bookmarks';

const BookmarksForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBookmark({ title, link }));
  };


  return (
    <form onSubmit={event => handleSubmit(event)}>
      <button type="submit" />
      <input type="text" onChange={event => setTitle(event.target.value)} />
      <input type="text" onChange={event => setLink(event.target.value)} />
    </form>
  );
};

export default connect()(BookmarksForm);
