import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../action/bookmarks';

const bookmarks = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const bookmarksList = [...state];

      const { bookmark } = action;

      bookmarksList.push(bookmark);

      localStorage.setItem('bookmarks', JSON.stringify(bookmarksList));

      return bookmarksList;
    }

    case REMOVE_BOOKMARK: {
      const { bookmark } = action;
      const bookmarksList = [...state];

      const bookmarksIndex = bookmarksList.findIndex(bookmarkItem => bookmarkItem.link === bookmark.link);

      bookmarksList.splice(bookmarksIndex, 1);

      localStorage.setItem('bookmarks', JSON.stringify(bookmarksList));

      return bookmarksList;
    }

    default:
      return state;
  }
};


export default bookmarks;
