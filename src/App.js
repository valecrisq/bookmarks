import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import BookmarksForm from './components/BookmarksForm';
import BookmarksContainer from './components/BookmarksContainer';

import './App.css';

const getState = () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  return { bookmarks };
};

const store = createStore(reducers, getState());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BookmarksForm />
        <hr />
        <BookmarksContainer />
      </Provider>
    </div>
  );
}

export default App;
