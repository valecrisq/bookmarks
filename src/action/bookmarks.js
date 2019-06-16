export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const addBookmark = bookmark => ({
  type: ADD_BOOKMARK,
  bookmark,
});

export const removeBookmark = bookmark => ({
  type: REMOVE_BOOKMARK,
  bookmark,
});
