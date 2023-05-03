import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData } from "../../stores/actions/actionCreator";
import TableData from "../components/TableData";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => {
    return state.books;
  });

  useEffect(() => {
    dispatch(fetchBooksData());
  }, []);

  return (
    <>
      <div>
        <Link to={"/books/add"} className="btn mx-3 my-3">
          Upload Book
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Book Path</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {books.map((book) => {
              return <TableData data={book} key={book.id} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
