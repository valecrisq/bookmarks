import { ADD_BOOKMARK } from '../action/bookmarks';

const bookmarks = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const bookmarksList = [...state];

      const { bookmark } = action;

      bookmarksList.push(bookmark);

      localStorage.setItem('bookmarks', JSON.stringify(bookmarksList));

      return bookmarksList;
    }
    default:
      return state;
  }
};


export default bookmarks;
