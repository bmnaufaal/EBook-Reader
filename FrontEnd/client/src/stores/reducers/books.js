import { CHANGE_BOOKS_LOADING, FETCH_BOOKS } from "../actions/actionType";

const initialState = {
  books: [],
  loadingBooks: false,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    case CHANGE_BOOKS_LOADING:
      return { ...state, loadingBooks: action.payload };
    default:
      return state;
  }
}
