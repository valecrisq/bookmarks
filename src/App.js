import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import BookmarksForm from './components/BookmarksForm';

import './App.css';
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BookmarksForm />
        {/* <BookmarksContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
