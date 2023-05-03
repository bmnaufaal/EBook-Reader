import { CHANGE_BOOKS_LOADING, FETCH_BOOKS } from "./actionType";

export const fetchBooks = (payload) => {
  return {
    type: FETCH_BOOKS,
    payload: payload,
  };
};

export const setLoadingBooks = (payload) => {
  return {
    type: CHANGE_BOOKS_LOADING,
    payload: payload,
  };
};

export const fetchBooksData = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:3000/books", {
      method: "GET",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) throw await res.text();
        return res.json();
      })
      .then((books) => {
        dispatch(fetchBooks(books));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
