import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBookmark } from '../action/bookmarks';

import '../styles/BookmarksForm.css';

const BookmarksForm = ({ bookmarks, dispatch }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!bookmarks.find(bookmark => bookmark.link === link)) {
      dispatch(addBookmark({ title, link }));
    } else {
      alert('Link Already Exists!');
    }
  };


  return (
    <div className="form-container">
      <h1 style={{ textAlign: 'left', marginLeft: '12%' }}>Bookmarks</h1>
      <div className="form">
        <form onSubmit={event => handleSubmit(event)}>
          <input type="text" maxLength="25" placeholder="My bookmark" onChange={event => setTitle(event.target.value)} required />
          <input type="url" placeholder="https://bestbookmarkever.com" onChange={event => setLink(event.target.value)} required />
          <button type="submit"><b>Save</b></button>
        </form>
      </div>
    </div>
  );
};


const mapStateToProps = ({ bookmarks }) => ({ bookmarks });
export default connect(mapStateToProps)(BookmarksForm);
